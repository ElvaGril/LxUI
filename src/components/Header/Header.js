import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { title } = this.props
        return (
            <header className='lx-header'>
                <h1>{title}</h1>
                <a className='lx-header-r-btn' href='javascript:;'>+</a>
            </header>
        )
    }

}
