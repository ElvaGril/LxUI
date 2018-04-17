import React, { Component } from 'react'
import Cell, { Cells } from '../../../components/Cell/Cell'
import './user.scss'
import photo from '../../../static/imgs/photo.jpg'

export default class User extends Component {

    constructor(props) {
        super(props)
    }

    handleSignOut() {

    }

    handleLinkTo(page) {
        this.props.history.push('/me/seter')
    }

    componentWillMount() {
        document.body.classList.add('gray')
    }

    render() {
        const user = {}

        return (
            <div className='lxui-wrapper usercenter'>
                <div className='usercenter-user'>
                    <Cell arrow={true}>
                        <div className='user-sketch'>
                            <div className='user-sketch-photo'>
                                <img src={photo} title='' alt='' />
                            </div>
                            <div className='user-sketch-main'>
                                <span>{user.name}</span>
                                <p>落雪号：luoxue714</p>
                            </div>
                        </div>
                    </Cell>
                </div>
                <div className='usercenter-menus'>
                    <Cells>
                        <Cell icon='&#xe6de;' name='实验室' dsc='小白鼠' arrow={true} iconColor='#F39C12' />
                        <Cell icon='&#xe6ae;' name='设置' arrow={true} iconColor='#3498db' onClick={this.handleLinkTo.bind(this, 'seter')} />
                        <Cell icon='&#xe892;' name='注销' arrow={true} iconColor='#e74c3c' onClick={this.handleSignOut.bind(this)} />
                    </Cells>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        document.body.classList.remove('gray')
    }

}