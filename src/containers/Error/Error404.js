import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import './error.scss'

export default class Error404 extends Component {

    constructor(props) {
        super(props)
    }

    handleLink() {
        const user = localStorage.getItem('user')
        if(user) {
            this.props.history.replace('/news')
        }else {
            this.props.history.replace('/login')
        }
        
    }

    render() {
        const { dsc } = this.props

        return (
            <div className='error-404'>
                <div className='error-404-dsc'>{dsc ? dsc : '您访问的页面不存在!'}</div>
                <div className='error-404-go'>
                    <Button type='primary' size='small' onClick={this.handleLink.bind(this)}>回首页</Button>
                </div>
            </div>
        )
    }

}