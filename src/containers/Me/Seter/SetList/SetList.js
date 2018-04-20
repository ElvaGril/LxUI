import React, { Component } from 'react'
import List, { Item } from '../../../../components/List/List'
import Input from '../../../../components/Input/Input'
import Switch from '../../../../components/Switch/Switch'
import Header from '../../../../components/Header/Header'

export default class Seter extends Component {

    constructor(props) {
        super(props)
    }

    handleLinkTo(page) {
        this.props.history.push(`/me/seter/${page}`)
    }

    render() {
        return (
            <div>
                <Header title='设置' />
                <div className='lxui-wrapper seter'>
                    <List>
                        <Item name='接收最新文章' textDirection='right'>
                            <Switch checked={true} />
                        </Item>
                        <Item name='支付密码' arrow={true} onClick={this.handleLinkTo.bind(this, 'paypassword')}></Item>
                    </List>
                </div>
            </div>
        )
    }

}