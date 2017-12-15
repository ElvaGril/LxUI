import React, { Component } from 'react'
import './cell.scss'

export const Cells = props => (
    <div className='lxui-cells'>
        {props.children}
    </div>
)

export default class Cell extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { icon, name, children, arrow, dsc, iconColor} = this.props
        return (
            <div className='lxui-cell'>
                {icon && <i className='lxui-cell-icon lxui-icon' style={{ color: iconColor }}>{icon}</i>}
                <div className='lxui-cell-content'>{children ? children : name}</div>
                {dsc && <div className='lxui-cell-dsc'>{dsc}</div>}
                {arrow && <i className='lxui-cell-arrow lxui-icon'>&#xe6a7;</i>}
            </div>
        )
    }

}