import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SetList from './SetList/SetList'
import Paypassword from './Paypassword/Paypassword'

export default class Seter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Route path='/me/seter' exact={true} component={SetList} />
                <Route path='/me/seter/paypassword' component={Paypassword} />
            </div>
        )
    }

}