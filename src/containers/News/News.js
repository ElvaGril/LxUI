import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './news.scss'
import Header from '../../components/Header/Header'
import Tabbar from '../../components/Tabbar/Tabbar'
import NewsItem from './NewsItem/NewsItem'
import Pullrefresh from '../../components/Pullrefresh/Pullrefresh'

export default class News extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newsList: [1, 2], // 信息列表
            isRefreshing: false
        }
    }

    handleRefresh() {
        const newsList = [...this.state.newsList, 1]

        setTimeout(() => {
            this.setState({ newsList, isRefreshing: false })
        }, 5000)
        
    }

    componentWillMount() {
        document.body.classList.add('gray')
    }

    render() {
        const { newsList, isRefreshing } = this.state

        return (
            <div>
                <Header title='最新' />
                <div className='lxui-wrapper'>
                    <Pullrefresh onRefresh={this.handleRefresh.bind(this)} isRefreshing={isRefreshing}>
                        <div className='news'>
                            {newsList.length > 0 && newsList.map((item, index) => <NewsItem key={index}/>)}
                        </div>
                    </Pullrefresh>
                    <Tabbar {...this.props.location} />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        document.body.classList.remove('gray')
    }

}