/* 下拉框
 * author: luoxue-xu.github.io
 * date: 2017.07.24
 */

import React, { Component } from 'react'
import './select.scss'

export default class Select extends Component {

    static defaultProps = {
        type: 'text'
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.value || ''
        }
    }

    handleChange(evt) {
        const value = evt.target.value
        this.setState({ value })
        if(this.props.onChange && (typeof this.props.onChange === 'function')) {
            this.props.onChange(value, this.props, this.props.name)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || ''
        })
    }

    render() {
        return (
            <select className='lxui-select' value={this.state.value} name={this.props.name} disabled={this.props.disabled || false} onChange={this.handleChange.bind(this)}>
                {this.props.children}
            </select>
        )
    }

}
