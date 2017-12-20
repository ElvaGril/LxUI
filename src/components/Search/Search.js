import React, { Component } from 'react'
import './search.scss'

/**
 * @param onSearch 查询的回调，参数为输入框的值
 * @param onCancel 取消的回调
 * @param autoFocus 是否自动获取输入框的焦点，true/false
 * @param value 默认传入输入框的值
 */

export default class Search extends Component {

    static defaultProps = {
        onSearch: () => { }, // 查询
        onCancel: () => { } // 取消
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.value || '',
            edit: false // 是否正在编辑中
        }
    }

    handleSearch(event) {
        if(this.state.value.length > 0) {
            this.props.onSearch(this.state.value)
        }
        event.preventDefault()
    }

    handleCancel() {
        this.setState({
            value: '',
            edit: false
        })
        this.props.onCancel()
    }

    handleChangeInput(event) {
        const value = event.target.value.trim()
        let edit = false

        if (value.length > 0) {
            edit = true
        } else {
            edit = false
        }
        this.setState({ value, edit })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
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
            <div className='lxui-search'>
                <label className='lxui-search-label'>
                    <form action='#' onSubmit={this.handleSearch.bind(this)}>
                        <input type='' name='' value={value} placeholder='IPC号/手机号' onChange={this.handleChangeInput.bind(this)} ref={element => this.input = element} />
                    </form>
                </label>
                {edit && <a href='javascript:;' onClick={this.handleCancel.bind(this)}>取消</a>}
            </div>
        )
    }

    componentDidMount() {
        if(this.props.autoFocus) {
            this.input.focus()
        }
    }

}