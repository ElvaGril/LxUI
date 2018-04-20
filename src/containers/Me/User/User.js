import React, { Component } from 'react'
import List, { Item } from '../../../components/List/List'
import Header from '../../../components/Header/Header'
import Tabbar from '../../../components/Tabbar/Tabbar'
import './user.scss'
import photo from '../../../static/imgs/photo.jpg'

export default class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '', // 昵称
            userName: '' // 账号
        }
    }

    handleSignOut() {
        localStorage.removeItem('user')
        this.props.history.push('/login')
    }

    handleLinkTo(page) {
        this.props.history.push(`/me/${page}`)
    }

    componentWillMount() {
        const user = localStorage.getItem('user')
        if(user) {
            this.setState({...JSON.parse(user)})
        }
        document.body.classList.add('gray')
    }

    render() {
        const { name, userName} = this.state

        return (
            <div>
                <Header title='天涯' />
                <div className='lxui-wrapper usercenter'>
                    <div className='usercenter-user' onClick={this.handleLinkTo.bind(this, 'userset')}>
                        <Item arrow={true}>
                            <div className='user-sketch-photo'>
                                <img src={photo} title='' alt='' />
                            </div>
                            <div className='user-sketch-main'>
                                <span>{name}</span>
                                <p>落雪号：{userName}</p>
                            </div>
                        </Item>
                    </div>
                    <div className='usercenter-menus'>
                        <List>
                            <Item fonticon='&#xe6de;' iconName='lxui-icon' name='实验室' dsc='小白鼠' arrow={true} color='#F39C12' onClick={this.handleLinkTo.bind(this, 'laboratory')} />
                            <Item fonticon='&#xe6ae;' iconName='lxui-icon' name='设置' arrow={true} color='#3498db' onClick={this.handleLinkTo.bind(this, 'seter')} />
                            <Item fonticon='&#xe892;' iconName='lxui-icon' name='注销' arrow={true} color='#e74c3c' onClick={this.handleSignOut.bind(this)} />
                        </List>
                    </div>
                </div>
                <Tabbar {...this.props.location} />
            </div>
        )
    }

    componentWillUnmount() {
        document.body.classList.remove('gray')
    }

}