import React, { Component } from 'react'
import './prompt.scss'

export const NoData = props => (
    <div className='lxui-prompt-nodata'><p>{props.children}</p></div>
)

export default class Prompt extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { text } = this.props

        return (
            <div className='lxui-prompt'>
                <p>{text}</p>
            </div>
        )
    }

}