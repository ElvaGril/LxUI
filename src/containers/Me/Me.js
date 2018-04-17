import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import './me.scss'
import Seter from './Seter/Seter'
import User from './User/User'

export default class Me extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const user = {}

        return (
            <div>
                <Header title='天涯' />
                <Route path='/me' exact={true} component={User} />
                <Route path='/me/seter' component={Seter} />
                <Tabbar {...this.props.location} />
            </div>
        )
    }

}