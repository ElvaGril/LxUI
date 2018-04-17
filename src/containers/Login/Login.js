import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { updateUser } from '../../actions/user'
import './login.scss'

@connect(null, dispatch => ({
    updateUser: user => dispatch(updateUser(user))
}))
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '', // 用户名
            name: '' // 昵称
        }
    }

    handleChangItem(value, props) {
        this.setState({
            [props.name]: value
        })
    }

    handleLogin() {
        if (!/^\w{6,12}$/.test(this.state.userName)) {
            // 判断用户名
            alert('用户名必须是字母、数字、下划线,6-12位')
            return
        }
        if(this.state.name.length < 2) {
            // 判断昵称
            alert('名字必须是2位以上')
            return
        }
    }

    componentWillMount() {
        document.body.classList.remove('gray')
    }

    render() {
        const { name, userName } = this.state

        return (
            <div className='login'>
                <div className='login-main'>
                    <div className='login-item'>
                        <Input placeholder='账号(字母、数字、下划线,6-12位)' name='userName' borderType='line' value={userName} onChange={this.handleChangItem.bind(this)} />
                    </div>
                    <div className='login-item'>
                        <Input placeholder='昵称(2位以上)' name='name' borderType='line' value={name} onChange={this.handleChangItem.bind(this)} />
                    </div>
                    <div className='login-btn'>
                        <Button type='primary' onClick={this.handleLogin.bind(this)}>注册</Button>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {

    }

}