import React, { Component } from 'react'
import createDomComponent from '../../utils/createDomComponent'
import './keyboard.scss'

const keyboardCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '删除']

class Keyboard extends Component {

    static defaultProps = {
        onChange: () => {}, // 输入
        onFinish: () => {}, // 完成
        onDelete: () => {} // 删除
    }

    constructor(props) {
        super(props)
        this.state = {
            show: props.show || false // 是否显示
        }
    }

    // 完成
    handleFinish() {
        this.setState({
            show: false
        })
        this.props.onFinish()
    }

    // 选择
    handleCheck(code) {
        if(code === '删除') {
            this.props.onDelete()
        }else {
            this.props.onChange(code)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.state.show) {
            this.setState({
                show: nextProps.show
            })
        }
    }

    // 创建列表的ReactDom
    createReactModal(props) {
        const { show } = this.state
        const { children } = this.props

        if(show) {
            return (
                <div className='lxui-keyboard'>
                    <div className='lxui-keyboard-header'>
                        <span className='lxui-keyboard-finish' onClick={this.handleFinish.bind(this)}>完成</span>
                    </div>
                    <div className='lxui-keyboard-main'>
                        {keyboardCode.map((item, index) => {
                            return <div className={`lxui-keyboard-item ${item}`} key={index} onClick={this.handleCheck.bind(this, item)}><span data-text={item}>{item}</span></div>
                        })}
                    </div>
                </div>
            )
        }else {
            return <div></div>
        }
    }

}

export default createDomComponent(Keyboard)