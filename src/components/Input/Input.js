import React, { Component } from 'react'
import './input.scss'

export default class Input extends Component {

    static defaultProps = {
        onChange: () => {}
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.value || ''
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        this.props.onChange(event.target.value, this.props)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value || ''
            })
        }
    }

    render() {
        const { value } = this.state
        const { placeholder, name, type, borderType, disabled } = this.props
        let _className = 'lxui-input'
        switch(borderType) {
            case 'line':
            _className += ' line'
            break
        }

        return (
            <input className={_className} name={name || ''} type={type || 'text'} disabled={disabled || false} value={value} placeholder={placeholder || ''} onChange={this.handleChange.bind(this)} />
        )
    }

}