/**
 * 标尺
 * 2018.04.21
 * @param {number} value 标记默认的位置 从scales里面选择，不传则默认为0
 * @param {array} scales 刻度列表 ['1', '2', '3'] 数量必须是 num - 1，多余的不会渲染
 * @return {any} 返回当前标记所在的刻度值
 */

import React, { Component } from 'react'
import offset from '../../utils/offset'
import './ruler.scss'

export default class Ruler extends Component {

    static defaultProps = {
        onChange: () => {}
    }

    constructor(props) {
        super(props)
        
        this.state = {
            distance: 0, // 标记的位置
            scales: props.scales, // 默认不存在刻度
            transition: ''
        }

        this.len = props.scales.length - 1 // 分成几等份
        this.isTouch = false // 是否正在滑动
        this.touchData = {
            startX: 0 // 开始触摸的位置
        }
        this.barStyle = {
            offsetLeft: 0, // 刻度尺的左偏移量
            width: 0, // 刻度尺宽度
            eachItemWidth: 0 // 每个刻度的宽度
        }
        this.touchStartDistance = this.state.distance // 开始触摸时的位置
    }

    handleTouchStart(event) {
        this.isTouch = true
        this.touchData.startX = event.touches[0].clientX
        const distance = event.touches[0].clientX - this.barStyle.offsetLeft

        this.setState({
            distance,
            transition: 'all .3s'
        })
        this.touchStartDistance = distance
    }

    handleTouchMove(event) {
        if(this.isTouch) {
            const touchMoveX = event.touches[0].clientX
            const distance = touchMoveX - this.touchData.startX + this.touchStartDistance // 当前标记的位置
            if (distance >= 0 && distance <= this.barStyle.width) {
                this.setState({ distance, transition: '' })
            }
        }
    }

    handleTouchEnd(event) {
        this.isTouch = false
        this.touchStartDistance = this.state.distance
        for(let i = 0; i < this.len + 1; i++) {
            if (this.touchStartDistance - this.barStyle.eachItemWidth / 2 <= this.barStyle.eachItemWidth * i) { // 采用四舍五入的方式
                this.setState({
                    distance: this.barStyle.eachItemWidth * i,
                    transition: 'all .3s' 
                })
                this.touchStartDistance = this.barStyle.eachItemWidth * i
                this.props.onChange(this.state.scales[i])
                return
            }
        }

    }

    render() {
        const { distance, transition, scales, num } = this.state

        return (
            <div className='lxui-ruler' onTouchStart={this.handleTouchStart.bind(this)} onTouchMove={this.handleTouchMove.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)}>
                <div className='lxui-ruler-unit'>
                    {scales.map((item, index) => <span style={{ left: `${index / this.len * 100}%` }} key={index}>{item}</span>)}
                </div>
                <div className='lxui-ruler-bar' ref={element => this.rulerBar = element}>
                    {scales.map((item, index) => {
                        if(index > 0) {
                            return <span key={index}></span>
                        }
                    })}
                </div>
                <span className='lxui-ruler-arrow' style={{ left: distance, transition: transition }}></span>
            </div>
        )
    }

    componentDidMount() {
        this.barStyle = {
            offsetLeft: offset(this.rulerBar).left,
            width: this.rulerBar.clientWidth,
            eachItemWidth: this.rulerBar.clientWidth / this.len
        }

        if(this.props.value) {
            const i = this.state.scales.findIndex(item => item === this.props.value)
            this.setState({
                distance: i * this.barStyle.eachItemWidth
            })
        }
    }

}