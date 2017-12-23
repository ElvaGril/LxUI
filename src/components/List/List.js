import React, { Component } from 'react'
import './list.scss'

export default class List extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { photo, children, dsc, size, name } = this.props
        let listClass = 'lxui-list-item'
        switch(size) {
            case 'small':
            listClass += ' small'
            break
        }

        return (
            <div className = {listClass}>
                <div className='lxui-list-item-photo'>
                    <img src={photo} title='luoxue' alt='luoxue' />
                </div>
                <div className='lxui-list-item-content'>
                    {children}
                    {!children && <span className='lxui-list-item-name'>{name}</span>}
                    {!children && dsc && <p className='lxui-list-item-dsc'>{dsc}</p>}
                </div>
            </div>
        )
    }

}