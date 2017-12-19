import React, { Component } from 'react'
import './list.scss'

export default class List extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { photo, children, dsc, size } = this.props
        let listClass = 'lxui-list-item'
        switch(size) {
            case 'smalll':
            listClass += ' small'
            break
        }

        return (
            <div className = {listClass}>
                <div className='lxui-list-item-photo'>
                    <img src={photo} title='luoxue' alt='luoxue' />
                </div>
                <div className='lxui-list-item-content'>
                    <span>{children}</span>
                    {dsc && <p>{dsc}</p>}
                </div>
            </div>
        )
    }

}