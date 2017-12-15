import React, { Component } from 'react'
import Input from '../../../components/Input/Input'
import './messageinfo.scss'
import love from '../../../static/imgs/photo.jpg'

export default class MessageInfo extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.body.classList.add('message_bg')
    }

    render() {
        return (
            <div className='message'>
                <div className='message-scroller'>
                    <div className='message-item'>
                        <div className='message-item-photo'>
                            <img src={love} title='' alt='' />
                        </div>
                        <div className='message-item-content'>
                            <p className='message-item-text'>嗨，吃午饭了吗？</p>
                        </div>
                    </div>
                    <div className='message-item right'>
                        <div className='message-item-photo'>
                            <img src={love} title='' alt='' />
                        </div>
                        <div className='message-item-content'>
                            <p className='message-item-text'>没呢，一起去怎么样</p>
                        </div>
                    </div>
                </div>
                <div className='message-footer'>
                    <div className='message-input'>
                        <Input />
                    </div>
                    <div className='message-sendbtn'>
                        <a href='javascript:;'>发送</a>
                    </div>
                </div>
            </div>
        )
    }

}