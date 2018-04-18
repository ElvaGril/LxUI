import React, { Component } from 'react'
import List, { Item } from '../../../components/List/List'
import Input from '../../../components/Input/Input'

export default class UserSet extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='lxui-wrapper seter'>
                <List>
                    <Item name='接收最新文章' textDirection='right'>
                        <Switch checked={true} />
                    </Item>
                </List>
            </div>
        )
    }

}