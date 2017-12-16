import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MessageInfo from '../MessageInfo/MessageInfo'
import { updateUserList } from '../../../actions/message'
import Tabbar from '../../../components/Tabbar/Tabbar'
import './messagelist.scss'
import userphoto from '../../../static/imgs/photo.jpg'
import wilddog from 'wilddog'

const MsgItem = props => (
    <div className='msglist-item'>
        <Link to={{ pathname: `/message/messageinfo`, state: { id: props.id }}}>
            <div className='msglist-item-photo'>
                <img src={userphoto} title='luoxue' alt='luoxue' />
            </div>
            <div className='msglist-item-content'>
                <span className='msglist-item-name'>{props.name}</span>
                <p className='msglist-item-sketch'>{props.msg}</p>
            </div>
        </Link>
    </div>    
)

@connect(state => ({
    user: state.user.user,
    userList: state.message.userList
}), dispatch => ({
    updateUserList: userList => dispatch(updateUserList(userList))
}))
export default class MessageList extends Component {

    constructor(props) {
        super(props)
        this.userList = [] // 用户列表
        this.msgList = [] // 消息列表
    }

    /* 合并用户列表和消息列表的数据
     * 除了自己，所有的用户都会查出来
     */
    mergeMsg() {
        const userList = []
        for(let i = 0; i < this.userList.length; i++) {
            if(this.userList[i].id !== this.props.user.id) {
                let msgItem = {}
                if (this.msgList[this.userList[i].id]) {
                    msgItem = JSON.parse(this.msgList[this.userList[i].id])
                }
                userList.push({
                    id: this.userList[i].id,
                    name: this.userList[i].name,
                    msg: msgItem.msg
                })
            }
        }
        this.props.updateUserList(userList)
    }

    componentWillMount() {
        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
        // 监听用户表
        this.userRef = wilddog.sync().ref('/user')
        this.userRef.on('value', data => {
            this.userList = []
            const _d = data.val()
            if (_d) {
                for (let attr in _d) {
                    this.userList.push({
                        ...JSON.parse(_d[attr]),
                        id: attr
                    })
                }
                this.mergeMsg()
            }
        })
        // 监听最新消息表
        this.msgRef = wilddog.sync().ref(`/msg/${this.props.user.id}`)
        this.msgRef.on('value', data => {
            if (data.val()) {
                this.msgList = data.val()
                this.mergeMsg()
            }
        })
        document.body.classList.remove('message_bg')
    }

    render() {
        const { userList } = this.props
        return (
            <div className='msglist'>
                {userList && userList.length > 0 && userList.map((item, index) => <MsgItem {...item} key={index} />)}
                {!userList && '人呐'}
                <Tabbar {...this.props.location} />
            </div>
        )
    }

    componentWillUnmount() {
        this.userRef.off()
        this.msgRef.off()
    }

}