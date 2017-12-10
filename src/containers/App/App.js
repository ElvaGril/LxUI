import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import MsgList from '../../components/MsgList/MsgList'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.scss'

@connect(state => ({
    name: state.name
}))
export default class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { name } = this.props

        return (
            <div>
                <Header title='落雪图册' />
                <div className='lxui-wrapper'>
                    <MsgList />
                </div>
                <Tabbar />
            </div>
        )
    }

}
