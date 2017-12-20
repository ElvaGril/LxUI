import React, { Component } from 'react'
import Search from '../../../components/Search/Search'
import List from '../../../components/List/List'
import './addfriend.scss'
import userphoto from '../../../static/imgs/photo.jpg'
import wilddog from 'wilddog'

export default class AddFriend extends Component {

    constructor(props) {
        super(props)

        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
    }

    handleSearch(value) {
        const searchRef = wilddog.sync().ref('/user')
    }

    handleCancelSearch() {
        this.props.history.goBack()
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className='addfriend'>
                <div className='addfriend-search'>
                    <Search onSearch={this.handleSearch.bind(this)} onCancel={this.handleCancelSearch.bind(this)} autoFocus={true} />
                </div>
                <div className='addfriend-searched-list'>
                    <List photo={userphoto} size='small'>落雪</List>
                </div>
            </div>
        )
    }

}