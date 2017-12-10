import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.scss'
import photo1 from './love.jpg'

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
                <Tabbar />
            </div>
        )
    }

}
