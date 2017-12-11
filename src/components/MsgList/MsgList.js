import React, { Component } from 'react'
import './msglist.scss'
import userphoto from '../../static/imgs/love.jpg'

const MsgItem = props => (
    <div className='msglist-item'>
        <div className='msglist-item-photo'>
            <img src={userphoto} title='luoxue' alt='luoxue' />
        </div>
        <div className='msglist-item-content'>
            <span className='msglist-item-name'>落雪</span>
            <p className='msglist-item-sketch'>吃午饭了吗？</p>
        </div>
    </div>    
)

export default class MsgList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='msglist'>
                {[1, 2, 3, 4, 5].map((item, index) => <MsgItem key={index} />)}
            </div>
        )
    }

}