import React, { Component } from 'react'
import './badge.scss'

export default class Badge extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { count } = this.props
        return (
            <span className='lxui-badge'>{count}</span>
        )
    }

}