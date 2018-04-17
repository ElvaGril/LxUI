import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './tabbar.scss'
import Badge from '../Badge/Badge'

/**
 * dangerouslySetInnerHTML 是为了防止xss攻击而特殊处理插入的html代码
 */

const Item = props => (
    <div className={`lxui-tabbar-item ${props.active ? 'active' : ''}`}>
        <Link to={props.url}>
            <i className='lxui-icon lxui-tabbar-icon' dangerouslySetInnerHTML={{__html: props.icon}}></i>
            <span className='lxui-tabbar-name'>{props.name}</span>
            {props.count * 1 > 0 && <Badge count={props.count}/>}
        </Link>
    </div>
)

// 主菜单
const navList = [
    {
        name: '轻落雪',
        url: '/news',
        active: null,
        dsc: '待从头、收拾旧山河，朝天阙[文章、相册]',
        icon: '&#xe645;'
    },
    {
        name: '尘土',
        url: '/memory',
        active: null,
        dsc: '曾经的回忆，昨日的点滴[文章]',
        icon: '&#xe69a;'
    },
    {
        name: '流水',
        url: '/photos',
        active: null,
        dsc: '心所思，目所及[相册]',
        icon: '&#xe67f;'
    },
    {
        name: '天涯',
        url: '/me',
        active: null,
        dsc: '心若自在，四海为家[我]',
        icon: '&#xe691;'
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
                {navList.map((item, index) => {
                    const reg = new RegExp(`^${item.url}(/|)$`, 'g')
                    return <Item {...item} active={reg.test(pathname)} key={index} />
                })}
            </footer>
        )
    }

}