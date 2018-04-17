import React, { Component } from 'react'
import { connect } from 'react-redux'
import News from './News/News'
import Memory from './Memory/Memory'
import Photos from './Photos/Photos'
import Me from './Me/Me'
import Login from './Login/Login'
import Header from '../components/Header/Header'
import Tabbar from '../components/Tabbar/Tabbar'
import { Router, Route, Link, HashRouter, Redirect } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { updateUser } from '../actions/user'

const history = createHistory()

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
            <Router history={history}>
                <div className='lxui-page'>
                    <Route path='/' exact={true} render={() => (loggeIn ? <Redirect to='/news' /> : <Redirect to='/login' />)} />
                    <Route path='/login' component={Login} />
                    <Route path='/news' component={News} />
                    <Route path='/memory' component={Memory} />
                    <Route path='/photos' component={Photos} />
                    <Route path='/me' component={Me} />
                </div>
            </Router>
        )
    }

}
