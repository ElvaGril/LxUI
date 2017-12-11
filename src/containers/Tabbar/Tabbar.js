import React, { Component } from 'react'
import './tabbar.scss'

export default class Tabbar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className='lxui-tabbar'>
                <a href='javascript:;' className='lxui-tabbar-item active'>
                    <i className='lxui-icon lxui-tabbar-icon'>&#xe69b;</i>
                    <span className='lxui-tabbar-name'>通讯录</span>
                    <span className='lxui-tabbar-badge'>3</span>
                </a>
                <a href='javascript:;' className='lxui-tabbar-item'>
                    <i className='lxui-icon lxui-tabbar-icon'>&#xe699;</i>
                    <span className='lxui-tabbar-name'>发现</span>
                </a>
                <a href='javascript:;' className='lxui-tabbar-item'>
                    <i className='lxui-icon lxui-tabbar-icon'>&#xe6b8;</i>
                    <span className='lxui-tabbar-name'>我</span>
                </a>
            </footer>
        )
    }

}