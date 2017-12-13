import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './message.scss'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import MessageList from './MessageList/MessageList'
import MessageInfo from './MessageInfo/MessageInfo'
export default class Message extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title='消息' icon='&#xe6b9;' />
                <div className='lxui-wrapper'>
                    <Route path='/message' exact={true} component={MessageList} />
                    <Route path='/message/messageinfo' component={MessageInfo} />
                </div>
                <Tabbar {...this.props.location} />
            </div>
        )
    }

}