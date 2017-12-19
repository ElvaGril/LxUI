import React, { Component } from 'react'
import { connect } from 'react-redux'
import './usercenter.scss'
import Cell, { Cells } from '../../../components/Cell/Cell'
import photo from '../../../static/imgs/photo.jpg'
import wilddog from 'wilddog'

@connect(state => ({
    user: state.user.user
}))
export default class UserCenter extends Component {

    constructor(props) {
        super(props)
        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
    }

    componentWillMount() {
        document.body.classList.add('gray')
    }

    /* 退出，有风险，等同注销
     * 会删除在服务器上相关的用户信息、和其他人的聊天记录
     */
    handleSignOut() {
        localStorage.removeItem('user') // 删除本地用户信息
        // 删除用户表中的值
        const userRef = wilddog.sync().ref(`/user/${this.props.user.id}`)
        userRef.remove()
        // 删除用户消息表中的值
        const msgRef = wilddog.sync().ref(`/msg/${this.props.user.id}`)
        msgRef.remove()
        this.props.history.push('/login')
    }

    render() {
        console.log(this.props)
        const { user } = this.props
        return (
            <div className='usercenter'>
                <div className='usercenter-user'>
                    <Cell arrow={true}>
                        <div className='user-sketch'>
                            <div className='user-sketch-photo'>
                                <img src={photo} title='' alt='' />
                            </div>
                            <div className='user-sketch-main'>
                                <span>{user.name}</span>
                                <p>落雪号：luoxue714</p>
                            </div>
                        </div>
                    </Cell>
                </div>
                <div className='usercenter-menus'>
                    <Cells>
                        <Cell icon='&#xe6de;' name='实验室' dsc='小白鼠' arrow={true} iconColor='#F39C12' />
                        <Cell icon='&#xe6ae;' name='设置' arrow={true} iconColor='#3498db' />
                        <Cell icon='&#xe892;' name='退出' arrow={true} iconColor='#e74c3c' onClick={this.handleSignOut.bind(this)} />
                    </Cells>
                </div>
            </div>
        )
    }

}