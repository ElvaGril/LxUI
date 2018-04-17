import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import './memory.scss'

export default class Memory extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title='尘土' />
                <div className='lxui-wrapper'>

                </div>
                <Tabbar {...this.props.location} />
            </div>
        )
    }

}