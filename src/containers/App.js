import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link, HashRouter, Redirect, Switch } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

// const News = asyncComponent(() => import('./News/News'))
// const Memory = asyncComponent(() => import('./Memory/Memory'))
// const Photos = asyncComponent(() => import('./Photos/Photos'))
// const Me = asyncComponent(() => import('./Me/Me'))
// const Login = asyncComponent(() => import('./Login/Login'))
// const Error404 = asyncComponent(() => import('./Error/Error404'))
import News from './News/News'
import Memory from './Memory/Memory'
import Photos from './Photos/Photos'
import Me from './Me/Me'
import Login from './Login/Login'
import Error404 from './Error/Error404'

import Header from '../components/Header/Header'
import Tabbar from '../components/Tabbar/Tabbar'
import { updateUser } from '../actions/user'

@connect(null, dispatch => ({
    updateUser: user => dispatch(updateUser(user))
}))
export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggeIn: false // 是否登录
        }
    }

    componentWillMount() {
        const user = localStorage.getItem('user')
        this.props.updateUser(JSON.parse(user))
        if (user) {
            this.setState({
                loggeIn: true
            })
        }
    }

    render() {
        const { name } = this.props
        const { loggeIn } = this.state

        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact={true} render={() => (loggeIn ? <Redirect to='/news' /> : <Redirect to='/login' />)} />
                    <Route path='/login' component={Login} />
                    <Route path='/news' component={News} />
                    <Route path='/memory' component={Memory} />
                    <Route path='/photos' component={Photos} />
                    <Route path='/me' component={Me} />
                    <Route component={Error404} />
                </Switch>
            </HashRouter>
        )
    }

}
