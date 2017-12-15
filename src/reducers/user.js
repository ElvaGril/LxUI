export function user(state = {}, action) {
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