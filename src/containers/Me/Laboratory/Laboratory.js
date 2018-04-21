import React, { Component } from 'react'
import './laboratory.scss'
import Ruler from '../../../components/Ruler/Ruler'

export default class Laboratory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ruleValue: '1/2'
        }
    }

    handleChangeRule(value) {
        this.setState({
            ruleValue: value
        })
    }

    render() {
        const { ruleValue } = this.state

        return (
            <div className='laboratory'>
                <Ruler value={ruleValue} scales={['0', '1/4', '1/2', '3/4', '1']} onChange={this.handleChangeRule.bind(this)}/>
            </div>
        )
    }

} 