export function news(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_NEWLIST':
            return {
                ...state,
                newList: action.newList
            }
        default:
            return state
    }
}