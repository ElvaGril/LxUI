import React, { Component } from 'react'
import './newsitem.scss'

export default class NewsItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className='news-item'>
                <div className='news-item-pic'></div>
                <header className='news-item-dsc'>
                    <h2>关于草地绿化面积的问题</h2>
                    <p>和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合</p>
                </header>
            </article>
        )
    }

}