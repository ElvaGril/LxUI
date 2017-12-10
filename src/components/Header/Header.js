import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { title } = this.props
        return (
            <header className='lxui-header'>
                <h1>{title}</h1>
                <a className='lxui-header-r-btn lxui-icon' href='javascript:;'>&#xe6b9;</a>
            </header>
        )
    }

}
