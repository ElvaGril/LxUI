import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import './me.scss'
import Seter from './Seter/Seter'
import UserSet from './UserSet/UserSet'
import User from './User/User'

export default class Me extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const user = {}

        return (
            <div>
                <Route path='/me' exact={true} component={User} />
                <Route path='/me/seter' component={Seter} />
                <Route path='/me/userset' component={UserSet} />
            </div>
        )
    }

}