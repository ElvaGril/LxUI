import React, { Component } from 'react'
import createDomComponent from '../../utils/createDomComponent'
import './actionsheet.scss'

export const ActionsheetItem = props => (
    <a href='javascript:;' onClick={props.onClick}>{props.children}</a>
)

class Actionsheet extends Component {

    static defaultProps = {
        onChange: () => {}, // 选择
        onCancel: () => {} // 取消
    }

    constructor(props) {
        super(props)
        this.state = {
            show: props.show || false // 是否显示
        }
    }

    // 选择
    handleChange(props, evt) {
        this.setState({ show: false })
        this.props.onChange(props, evt)
    }

    // 取消
    handleCancel() {
        this.setState({ show: false })
        this.props.onCancel()
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

        return (
            <div>
                <div className={`lxui-actionsheet-mask ${show ? 'show' : ''}`}></div>
                <div className={`lxui-actionsheet ${show ? 'show' : ''}`}>
                    {props.prompt && <div className='lxui-actionsheet-header'>{props.prompt}</div>}
                    <div className='lxui-actionsheet-list'>
                        {children && React.Children.map(children, item => <div onClick={this.handleChange.bind(this, item.props)}>{item}</div>)}
                    </div>
                    <div className='lxui-actionsheet-footer' onClick={this.handleCancel.bind(this)}>取消</div>
                </div>
            </div>
        )
    }

}

export default createDomComponent(Actionsheet)

{/* <Actionsheet prompt='提示信息'>
    <ActionsheetItem></ActionsheetItem>
</Actionsheet> */}
