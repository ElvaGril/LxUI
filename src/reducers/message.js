export function message(state = {}, action) {
    switch(action.type) {
        case 'UPDATE_USERLIST':
            return {
                ...state,
                userList: action.userList
            }
        default:
            return state
    }
}