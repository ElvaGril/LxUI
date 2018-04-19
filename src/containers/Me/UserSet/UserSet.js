import React, { Component } from 'react'
import { connect } from 'react-redux'
import List, { Item } from '../../../components/List/List'
import Input from '../../../components/Input/Input'
import Select from '../../../components/Select/Select'
import Button from '../../../components/Button/Button'
import Header from '../../../components/Header/Header'
import getFormData from '../../../utils/getFormData'
import { updateUser } from '../../../actions/user'
import './userset.scss'

@connect(state => state.user, dispatch => ({
    updateUser: user => dispatch(updateUser(user))
}))
export default class UserSet extends Component {

    constructor(props) {
        super(props)
    }

    handleTapSave() {
        
        console.log(getFormData(this.formEl))
    }

    render() {
        const { name, photo, sex, birthday, wechat, qq } = this.props.user

        return (
            <div>
                <Header title='用户信息' />
                <div className='lxui-wrapper seter' ref={element => this.formEl = element}>
                    <List>
                        <Item name='头像' arrow={true}>
                            <div className=''>{photo}</div>
                        </Item>
                        <Item name='姓名'>
                            <Input name='name' value={name} />
                        </Item>
                        <Item name='性别' arrow={true}>
                            <Select name='sex' value={sex}>
                                <option value='man'>男</option>
                                <option value='woman'>女</option>
                            </Select>
                        </Item>
                        <Item name='生日' arrow={true}>
                            <Input type='date' name='birthday' value={birthday} />
                        </Item>
                        <Item name='微信'>
                            <Input name='wechat' value={wechat} />
                        </Item>
                        <Item name='QQ'>
                            <Input name='qq' value={qq}/>
                        </Item>
                    </List>

                    <div className='userset-save'>
                        <Button type='primary' onClick={this.handleTapSave.bind(this)}>保存</Button>
                    </div>
                </div>
            </div>
        )
    }

}