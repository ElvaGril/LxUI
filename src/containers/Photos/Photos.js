import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'

export default class Photos extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title='流水' />
                <div className='lxui-wrapper'>
                    
                </div>
                <Tabbar {...this.props.location} />
            </div>
        )
    }

}