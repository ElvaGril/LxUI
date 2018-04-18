import React, { Component } from 'react'
import './pullrefresh.scss'


/**
 * 下拉刷新组件
 */
export default class Pullrefresh extends Component {

    static defaultProps = {
        onRefresh: () => { } // 刷新
    }

    constructor(props) {
        super(props)

        this.loadingHeight = props.loadingHeight || 80 // loading高度

        this.state = {
            tips: '下拉刷新',
            top: this.loadingHeight * -1,
            left: 0,
            isRefreshing: props.isRefreshing || false, // 是否正在刷新
            transition: '' // 移动效果
        }

        this.bodyOverflow = document.body.style.overflow // 容器默认是否有滚动条

        this.touchData = { // 触摸数据
            startTop: 0, // 初始触摸的top
            startLeft: 0, // 初始触摸的left
            moveTop: 0, // 移动过程中的top
            moveLeft: 0, // 移动过程中的left
            scrollTop: 0 // 初始触摸时的scrollTop值
        }
        this.moveData = { // 滑动的数据
            distanceY: 0, // 上下滑动的距离
            distanceX: 0 // 左右滑动的距离
        }
        this.isTriggerRefresh = false // 是否触发了下拉事件
        this.isTouch = false // 是否正在触摸中
        this.minHeightToRefresh = 70 // 触发刷新的最小高度
    }

    handleTouchStart(event) {
        this.isTouch = true
        Object.assign(this.touchData, {
            startTop: event.touches[0].clientY,
            scrollTop: document.documentElement.scrollTop || document.body.scrollTop
        })
    }

    handleTouchMove(event) {
        let tips = '下拉刷新'
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

        this.touchData.moveTop = event.touches[0].clientY
        this.moveData.distanceY = this.touchData.moveTop - this.touchData.startTop - this.touchData.scrollTop

        if (scrollTop === 0 && this.moveData.distanceY > 0) {
            if (event.cancelable && !event.isDefaultPrevented) {
                // 没有禁用的情况下，才禁用
                event.preventDefault()
            }
            this.isTriggerRefresh = true
            if (this.moveData.distanceY > this.loadingHeight) {
                tips = '松开后刷新'
            }
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden' // 下滑过程中，去掉滚动条
            const _top = (this.moveData.distanceY - this.loadingHeight) > 0 ? (this.moveData.distanceY - this.loadingHeight) / 5 : (this.moveData.distanceY - this.loadingHeight)
            this.setState({
                transition: '',
                top: _top,
                tips
            })
        } else {
            document.body.style.overflow = this.bodyOverflow
            this.isTriggerRefresh = false
        }
    }

    handleTouchEnd(event) {
        this.isTouch = false
        document.body.style.overflow = this.bodyOverflow
        document.body.style.height = 'auto'
        if (this.isTriggerRefresh && this.moveData.distanceY > this.minHeightToRefresh && !this.state.isRefreshing) {
            this.setState({
                isRefreshing: true,
                tips: '正在刷新...'
            }, this.props.onRefresh.bind(this))
        }
        this.setState({
            transition: 'all .3s ease-out',
            top: this.loadingHeight * -1
        })
        this.isTriggerRefresh = false
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isRefreshing !== this.state.isRefreshing) {
            this.setState({
                isRefreshing: nextProps.isRefreshing || false
            })
        }
    }

    render() {
        const { top, left, tips, transition, isRefreshing } = this.state

        return (
            <div className='lx-pullrefresh' onTouchStart={this.handleTouchStart.bind(this)} onTouchMove={this.handleTouchMove.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)}>
                <div className={`lx-pullrefresh-container ${isRefreshing ? 'loading' : ''}`} style={{ 'transform': `translate(${left}px, ${top}px)`, 'transition': `${transition}` }}>
                    <div className={`lx-pullrefresh-tips ${isRefreshing ? 'loading' : ''}`}>{tips}</div>
                    {this.props.children}
                </div>
            </div>
        )
    }

}