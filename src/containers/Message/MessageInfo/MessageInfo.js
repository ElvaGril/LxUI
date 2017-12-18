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
        this.state = {
            msgList: [],
            msg: ''
        }
        this.firstLoad = true // 是否第一次请求聊天记录
        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
        this.msgRef = wilddog.sync().ref(`/msg/${props.user.id}/${props.location.state.id}`)
        this.otherRef = wilddog.sync().ref(`/msg/${props.location.state.id}/${props.user.id}`)
    }

    componentWillMount() {
        this.msgRef.on('value', data => {
            if(data.val()) {
                console.log(data.val())
                const msgList = JSON.parse(data.val())
                msgList.map(item => {
                    item.status = 1
                    return item
                })
                if(this.firstLoad) {
                    // 第一次加载需要把当前聊天对象发送过来的消息全部设置为已读
                    this.firstLoad = false
                    this.msgRef.set(JSON.stringify(msgList))
                    this.otherRef.set(JSON.stringify(msgList))
                }
                this.setState({ msgList })
            }
        })
        document.body.classList.add('message_bg')
    }

    handleSend() {
        if(this.state.msg.length == 0) return
        this.setState({ msg: '' })
        let msgList = this.state.msgList.slice(0)
        msgList = [...msgList, { status: 0, user: this.props.user.id, msg: this.state.msg }] // 0 表示未读，1表示已读
        this.msgRef.set(JSON.stringify(msgList))
        this.otherRef.set(JSON.stringify(msgList))
    }

    handleChangeMsg(value, props) {
        this.setState({
            [props.name]: value
        })
    }

    render() {
        const { msg, msgList } = this.state
        const { user } = this.props

        return (
            <div className='message'>
                <div className='message-scroller'>
                    {msgList && msgList.length > 0 && msgList.map((item, index) => {
                        return (
                            <div className={`message-item ${item.user === user.id ? 'right' : ''}`} key={index}>
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
        this.msgRef.off()
    }

}