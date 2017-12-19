import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { updateUser } from '../../actions/user'
import wilddog from 'wilddog'
import './login.scss'

@connect(null, dispatch => ({
    updateUser: user => dispatch(updateUser(user))
}))
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
        let user = { name: this.state.name }
        const _user = this.ref.push(JSON.stringify(user))
        user.id = _user.key()
        this.props.updateUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        this.props.history.push('/message')
    }

    componentWillMount() {
        document.body.classList.remove('gray')
        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
        this.ref = wilddog.sync().ref('/user')
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