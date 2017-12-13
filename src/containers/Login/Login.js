import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './login.scss'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChangItem(value, props) {
        this.setState({
            [props.name]: value
        })
    }

    handleLogin() {
        if(this.state.name.length < 3) {
            alert('名字长度必须大于3个字符')
            return
        }
        localStorage.setItem('loggein', this.state.name)
        this.props.history.push('/message')
    }

    render() {
        const { name } = this.state

        return (
            <div className='login'>
                <div className='login-main'>
                    <Input placeholder='昵称' name='name' borderType='line' value={name} onChange={this.handleChangItem.bind(this)} />
                    <div className='login-btn'>
                        <Button type='primary' onClick={this.handleLogin.bind(this)}>登录</Button>
                    </div>
                </div>
            </div>
        )
    }

}