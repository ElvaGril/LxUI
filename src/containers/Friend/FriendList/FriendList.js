import React, { Component } from 'react'
import List from '../../../components/List/List'
import Cell, { Cells } from '../../../components/Cell/Cell'
import userphoto from '../../../static/imgs/photo.jpg'
import './friendlist.scss'

export default class New extends Component {

    constructor(props) {
        super(props)
        this.state = {
            friendList: []
        }

        wilddog.initializeApp({
            syncURL: 'https://wd1892954234ykrnvw.wilddogio.com'
        })
    }

    handleLinkToAddFriend() {
        this.props.history.push('/friend/addfriend')
    }

    componentWillMount() {
        document.body.classList.add('gray')
        this.friendRef = wilddog.sync().ref('/friend')
        this.friendRef.on('value', data => {
            console.log(data.val())
        })
    }

    render() {
        const { friendList } = this.state

        return (
            <div className='friend-wrap'>
                <div className='friend-setlist'>
                    <Cells>
                        <Cell icon='&#xe662;' onClick={this.handleLinkToAddFriend.bind(this)}>新的朋友</Cell>
                    </Cells>
                </div>
                {friendList && friendList.length > 0 && friendList.map((item, index) => {
                    return <List photo={userphoto} size='smalll' key={index}>落雪</List>
                })}
            </div>
        )
    }

}