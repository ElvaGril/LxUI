import React, { Component } from 'react'
import './tabbar.scss'

export default class Tabbar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className='lx-tabbar'>
                <a href='javascript:;' className='lx-tabbar-item active'>
                    <i className='lx-tabbar-icon'>&#xe69b;</i>
                    <span className='lx-tabbar-name'>通讯录</span>
                    <span className='lx-tabbar-badge'>3</span>
                </a>
                <a href='javascript:;' className='lx-tabbar-item'>
                    <i className='lx-tabbar-icon'>&#xe699;</i>
                    <span className='lx-tabbar-name'>发现</span>
                </a>
                <a href='javascript:;' className='lx-tabbar-item'>
                    <i className='lx-tabbar-icon'>&#xe6b8;</i>
                    <span className='lx-tabbar-name'>我</span>
                </a>
            </footer>
        )
    }

}