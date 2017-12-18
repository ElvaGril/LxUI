import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './tabbar.scss'
import Badge from '../Badge/Badge'

const Item = props => (
    <div className={`lxui-tabbar-item ${props.active ? 'active' : ''}`}>
        <Link to={props.url}>
            <i className='lxui-icon lxui-tabbar-icon'>{props.icon}</i>
            <span className='lxui-tabbar-name'>{props.name}</span>
            {props.count * 1 > 0 && <Badge count={props.count}/>}
        </Link>
    </div>
)

// 主菜单
const navList = [
    {
        name: '消息',
        url: '/message',
        active: null,
        icon: ''
    },
    {
        name: '发现',
        url: '/new',
        active: null,
        icon: ''
    },
    {
        name: '我',
        url: '/user',
        active: null,
        icon: ''
    }
]

export default class Tabbar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { pathname } = this.props
        return (
            <footer className='lxui-tabbar'>
                {navList.map((item, index) => <Item {...item} active={pathname === item.url} key={index} />)}
            </footer>
        )
    }

}