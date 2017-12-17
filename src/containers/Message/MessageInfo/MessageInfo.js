import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../../components/Input/Input'
import './messageinfo.scss'
import love from '../../../static/imgs/photo.jpg'
import wilddog from 'wilddog'

@connect(state => ({
    user: state.user.user
}))
export default class MessageInfo extends Component {

    constructor(props) {
        super(props)
        if (!props.location.state) {
            props.history.goBack()
        }
        const msgList = localStorage.getItem(this.props.location.state.id)
        this.state = {
            msgList: msgList ? JSON.parse(msgList) : [],
            msg: ''
        }
        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
        this.msgRef = wilddog.sync().ref(`/msg/${props.user.id}/${props.location.state.id}`)
    }

    componentWillMount() {
        this.msgRef.on('value', data => {
            if(data.val()) {
                const newMsg = JSON.parse(data.val())
                if(newMsg.type !== 'me') {
                    let msgList = this.state.msgList.slice(0)
                    msgList = [...msgList, newMsg]
                    this.setState({ msgList })
                }
            }
        })
        document.body.classList.add('message_bg')
    }

    handleSend() {
        this.setState({ msg: '' })
        let msgList = this.state.msgList.slice(0)
        msgList = [...msgList, { type: 'me', msg: this.state.msg }]
        this.setState({ msgList })
        this.msgRef.set(JSON.stringify({ type: 'me', msg: this.state.msg }))
    }

    handleChangeMsg(value, props) {
        this.setState({
            [props.name]: value
        })
    }

    render() {
        const { msg, msgList } = this.state

        return (
            <div className='message'>
                <div className='message-scroller'>
                    {msgList && msgList.length > 0 && msgList.map((item, index) => {
                        return (
                            <div className={`message-item ${item.type === 'me' ? 'right' : ''}`} key={index}>
                                <div className='message-item-photo'>
                                    <img src={love} title='' alt='' />
                                </div>
                                <div className='message-item-content'>
                                    <p className='message-item-text'>{item.msg}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='message-footer'>
                    <div className='message-input'>
                        <Input name='msg' value={msg} onChange={this.handleChangeMsg.bind(this)} />
                    </div>
                    <div className='message-sendbtn'>
                        <a href='javascript:;' onClick={this.handleSend.bind(this)}>发送</a>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        localStorage.setItem(this.props.location.state.id, JSON.stringify(this.state.msgList))
        this.msgRef.off()
    }

}