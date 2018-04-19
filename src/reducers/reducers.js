import { combineReducers } from 'redux'
import { news } from './news'
import { user } from './user'

const rootReducers = combineReducers({
    news,
    user
})

export default rootReducers