import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../../../components/Search/Search'
import List from '../../../components/List/List'
import { NoData } from '../../../components/Prompt/Prompt'
import Button from '../../../components/Button/Button'
import './addfriend.scss'
import userphoto from '../../../static/imgs/photo.jpg'
import wilddog from 'wilddog'

@connect(state => ({
    user: state.user.user
}))
export default class AddFriend extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userList: []
        }

        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
    }

    handleSearch(value) {
        const searchRef = wilddog.sync().ref(`/user/${value}`)
        searchRef.once('value', data => {
            if(data.val()) {
                this.setState({
                    userList: [data.val()]
                })
            }
        })
    }

    handleCancelSearch() {
        this.props.history.goBack()
    }

    // 添加好友
    handleAddFriend(props) {
        const friendRef = wilddog.sync().ref(`/friend/${this.props.user.id}`)
        friendRef.update({ [props.id]: props })
    }

    componentWillMount() {
        
    }

    render() {
        const { userList } = this.state
        return (
            <div className='addfriend'>
                <div className='addfriend-search'>
                    <Search onSearch={this.handleSearch.bind(this)} onCancel={this.handleCancelSearch.bind(this)} autoFocus={true} placeholder='输入需要查询的账号'/>
                </div>
                <div className='addfriend-searched-list'>
                    {userList && userList.length > 0 && userList.map((item, index) => {
                        return (
                            <List photo={userphoto} size='small' key={index}>
                                <span>{item.name}</span>
                                <Button type='primary' size='small' onClick={this.handleAddFriend.bind(this, item)}>添加</Button>
                            </List>
                        )
                    })}
                    {!userList || userList.length === 0 && <NoData>没有查到用户信息</NoData>}
                </div>
            </div>
        )
    }

}