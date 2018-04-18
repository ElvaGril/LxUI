import React, { Component } from 'react'
import './switch.scss'

/**
 * 开关组件
 * @param {boolean} 
 */
export default class Switch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: props.checked || false,
            checkedText: props.checkedText || '', // 打开后显示的文本，默认为空
            uncheckedText: props.uncheckedText || '', // 未打开显示的文本，默认为空
            disabled: props.disabled || false // 是否禁止修改, 默认禁止
        }
    }

    handleClick() {
        if(this.state.disabled) {
            return
        }
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        const { checked, checkedText, uncheckedText } = this.state

        return (
            <span className={`lxui-switch ${checked ? 'lxui-switch-checked' : ''}`} onClick={this.handleClick.bind(this)}>
                <span className='lxui-switch-inner'>{checked ? checkedText : uncheckedText}</span>
            </span>
        )
    }

}