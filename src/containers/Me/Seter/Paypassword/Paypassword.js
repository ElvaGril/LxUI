import React, { Component } from 'react'
import Header from '../../../../components/Header/Header'
import Button from '../../../../components/Button/Button'
import './paypassword.scss'
import Keyboard from '../../../../components/Keyboard/Keyboard'

export default class Paypassword extends Component {

    constructor(props) {
        super(props)

        this.maxLen = 6 // 输入的长度
        this.state = {
            defaultIndex: 0, // 输入指针的位置
            showKeyboard: false, // 是否显示键盘
            password: Array(this.maxLen).fill('')
        }
    }

    // 选择键盘字符
    handleChangeKeyboard(code) {
        let { password, defaultIndex } = this.state
        password[defaultIndex] = code
        defaultIndex = defaultIndex === (this.maxLen - 1) ? defaultIndex : (defaultIndex + 1)
        this.setState({ password, defaultIndex })
    }

    // 点击键盘完成
    handleFinishKeyboard() {
        this.setState({ showKeyboard: false })
    }

    // 输入聚焦
    handleFocus(index) {
        this.setState({ showKeyboard: true, defaultIndex: index })
    }

    handleSave() {
        const paypassword = this.state.password.join('')
        if(paypassword.length !== this.maxLen) {
            alert('您需要输入六位支付密码')
            return
        }
        localStorage.setItem('paypassword', paypassword)
        this.props.history.goBack()
    }

    componentWillMount() {
        const paypassword = localStorage.getItem('paypassword')
        if (paypassword) {
            this.setState({
                password: paypassword.split('')
            })
        }
    }

    render() {
        const { password, showKeyboard, defaultIndex } = this.state

        return (
            <div>
                <Header title='设置支付密码' />
                <div className='lxui-wrapper paypassword'>
                    <div className='paypassword-main'>
                        {password.map((item, index) => <div className={`paypassword-input ${index === defaultIndex ? 'focus' : ''}`} key={index} onClick={this.handleFocus.bind(this, index)}>{item}</div>)}
                    </div>
                    <div className='paypassword-save'>
                        <Button type='primary' onClick={this.handleSave.bind(this)}>保存</Button>
                    </div>
                </div>
                <Keyboard show={showKeyboard} onChange={this.handleChangeKeyboard.bind(this)} onFinish={this.handleFinishKeyboard.bind(this)}></Keyboard>
            </div>
        )
    }

}