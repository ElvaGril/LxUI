import React, { Component } from 'react'
import Button from '../../../components/Button/Button'
import './addfriend.scss'

export default class AddFriend extends Component {

    static defaultProps = {
        onSearch: () => {}
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.value || '',
            edit: false // 是否正在编辑中
        }
    }

    handleSearch() {
        this.props.onSearch(this.state.value)
    }

    handleCancel() {
        this.props.history.goBack()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value || ''
            })
        }
    }

    componentWillMount() {
        
    }

    render() {
        const { value, edit } = this.state
        return (
            <div className='addfriend'>
                <div className='lxui-search'>
                    <label className='lxui-search-label'>
                        <form action='#' onSubmit={this.handleSearch.bind(this)}>
                            <input type='' name='' value={value} placeholder='IPC号/手机号' />
                        </form>
                    </label>
                    {edit && <a href='javascript:;' onClick={this.handleCancel.bind(this)}>取消</a>}
                </div>
            </div>
        )
    }

}