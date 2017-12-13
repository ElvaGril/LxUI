import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../Message/Message'
import New from '../New/New'
import User from '../User/User'
import Login from '../Login/Login'
import { Router, Route, Link, HashRouter, Redirect } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import './app.scss'

const history = createHistory()

@connect(state => state)
export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggeIn: false
        }
    }

    componentWillMount() {
        const loggeIn = localStorage.getItem('loggein')
        console.log(loggeIn)
        if(loggeIn) {
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
                <div>
                    < Route path='/' exact={true} render={() => (loggeIn ? <Redirect to='/message' /> : <Redirect to='/login' />)} />
                    <Route path='/login' component={Login} />
                    <Route path='/message' component={Message} />
                    <Route path='/new' component={New} />
                    <Route path='/user' component={User} />
                </div>
            </Router>
        )
    }

}
