import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import UserCenter from './UserCenter/UserCenter'

export default class User extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title='我' />
                <div className='lxui-wrapper'>
                    <UserCenter {...this.props}/>
                </div>
                <Tabbar {...this.props.location} />
            </div>
        )
    }

}