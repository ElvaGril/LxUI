import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../Message/Message'
import New from '../New/New'
import User from '../User/User'
import Login from '../Login/Login'
import { Router, Route, Link, HashRouter, Redirect } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { updateUser } from '../../actions/user'
import './app.scss'

const history = createHistory()

@connect(null, dispatch => ({
    updateUser: user => dispatch(updateUser(user))
}))
export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggeIn: false
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
                <div>
                    <Route path='/' exact={true} render={() => (loggeIn ? <Redirect to='/message' /> : <Redirect to='/login' />)} />
                    <Route path='/login' component={Login} />
                    <Route path='/message' component={Message} />
                    <Route path='/new' component={New} />
                    <Route path='/user' component={User} />
                </div>
            </Router>
        )
    }

}
