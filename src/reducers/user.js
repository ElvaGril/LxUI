import debug from '../utils/debug'

export function user(state = {}, action) {
    if(debug) {
        console.log(action)
    }
    switch (action.type) {
        case 'UPDATE_USERINFO':
            return {
                ...state,
                user: action.user
            }
        default:
        return state
    }
}