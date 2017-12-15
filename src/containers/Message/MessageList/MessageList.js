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
        <Link to={`/message/messageinfo/:id=${props.id}`}>
            <div className='msglist-item-photo'>
                <img src={userphoto} title='luoxue' alt='luoxue' />
            </div>
            <div className='msglist-item-content'>
                <span className='msglist-item-name'>{props.name}</span>
                <p className='msglist-item-sketch'>{props.lastMsg}</p>
            </div>
        </Link>
    </div>    
)

@connect(state => ({
    userList: state.message.userList
}), dispatch => ({
    updateUserList: userList => dispatch(updateUserList(userList))
}))
export default class MessageList extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
        let ref = wilddog.sync().ref('/user')
        ref.on('value', data => {
            let userList = []
            const _d = data.val()
            if (_d) {
                for (let attr in _d) {
                    userList.push({
                        ...JSON.parse(_d[attr]),
                        id: attr
                    })
                }
                this.props.updateUserList(userList)
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

}