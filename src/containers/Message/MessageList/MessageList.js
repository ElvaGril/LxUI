import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import MessageInfo from '../MessageInfo/MessageInfo'
import './messagelist.scss'
import userphoto from '../../../static/imgs/photo.jpg'

const MsgItem = props => (
    <div className='msglist-item'>
        <Link to='/message/messageinfo'>
            <div className='msglist-item-photo'>
                <img src={userphoto} title='luoxue' alt='luoxue' />
            </div>
            <div className='msglist-item-content'>
                <span className='msglist-item-name'>落雪</span>
                <p className='msglist-item-sketch'>吃午饭了吗？</p>
            </div>
        </Link>
    </div>    
)

export default class MessageList extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.body.classList.remove('message_bg')
    }

    render() {
        return (
            <div className='msglist'>
                {[1, 2, 3, 4, 5].map((item, index) => <MsgItem key={index} />)}
            </div>
        )
    }

}