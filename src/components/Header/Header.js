import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { title, icon } = this.props
        return (
            <header className='lxui-header'>
                <h1>{title}</h1>
                {icon && <a className='lxui-header-r-btn lxui-icon' href='javascript:;'>{icon}</a>}
            </header>
        )
    }

}
