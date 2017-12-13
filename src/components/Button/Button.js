import React, { Component } from 'react'
import './button.scss'

export default class Button extends Component {

    static defaultProps = {
        onClick: () => {}
    }

    constructor(props) {
        super(props)
    }

    handleClick() {
        if(this.props.disabled) return
        this.props.onClick()
    }

    /**
     * 
     */
    render() {
        const { children, type, size, disabled } = this.props
        let _className = 'lxui-button'
        switch(type) {
            case 'warning':
                _className += ' warning'
                break
            case 'primary':
                _className += ' primary'
                break
        }

        switch(size) {
            case 'large':
                _className += ' large'
                break
            case 'small':
                _className += ' small'
                break
        }

        return (
            <a className={_className} href='javascript:;' onClick={this.handleClick.bind(this)}>{children}</a>
        )
    }

}