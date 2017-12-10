
export default function(state = {name: 'qianshan'}, action) {
    switch(action.type) {
        case 'UPDATE':
        return {
            ...state,
            name: action.name
        }
        default:
        return state
    }
}