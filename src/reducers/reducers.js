import { combineReducers } from 'redux'
import { message } from './message'
import { news } from './new'
import { user } from './user'

const rootReducers = combineReducers({
    message,
    news,
    user
})

export default rootReducers