import React, { Component } from 'react'
import './usercenter.scss'
import Cell, { Cells } from '../../../components/Cell/Cell'
import photo from '../../../static/imgs/photo.jpg'

export default class UserCenter extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.body.classList.add('message_bg')
    }

    render() {
        return (
            <div className='usercenter'>
                <div className='usercenter-user'>
                    <Cell arrow={true}>
                        <div className='user-sketch'>
                            <div className='user-sketch-photo'>
                                <img src={photo} title='' alt='' />
                            </div>
                            <div className='user-sketch-main'>
                                <span>千山慕雪</span>
                                <p>落雪号：luoxue714</p>
                            </div>
                        </div>
                    </Cell>
                </div>
                <div className='usercenter-menus'>
                    <Cells>
                        <Cell icon='&#xe6de;' name='实验室' dsc='小白鼠' arrow={true} iconColor='#F39C12' />
                        <Cell icon='&#xe6ae;' name='设置' arrow={true} iconColor='#3498db' />
                    </Cells>
                </div>
            </div>
        )
    }

}