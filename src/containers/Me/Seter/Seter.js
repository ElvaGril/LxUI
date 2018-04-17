import React, { Component } from 'react'
import List, { Item } from '../../../components/List/List'
import Input from '../../../components/Input/Input'

export default class Seter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='lxui-wrapper seter'>
                <List>
                    <Item name='名称' arrow={true}>
                        <Input name='name' value='落雪' />
                    </Item>
                    <Item name='性别' arrow={true}>
                        <Input name='name' value='男' />
                    </Item>
                    <Item name='年龄' unit='岁'>
                        <Input name='age' value='45' />
                    </Item>
                    <Item name='财富' unit='元'>
                        <Input name='money' value='25000' />
                    </Item>
                    <Item name='签名' tips='生活要珍惜'>
                        <Input name='qm' value='' />
                    </Item>
                </List>
            </div>
        )
    }

}