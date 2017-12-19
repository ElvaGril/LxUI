import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import FriendList from './FriendList/FriendList'
import AddFriend from './AddFriend/AddFriend'
import './friend.scss'

export default class New extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title='通讯录' />
                <div className='lxui-wrapper'>
                    <Route path='/friend' exact={true} component={FriendList} />
                    <Route path='/friend/addfriend' exact={true} component={AddFriend} />
                </div>
                <Tabbar {...this.props.location} />
            </div>
        )
    }

}