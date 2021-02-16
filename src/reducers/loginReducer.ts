export default (state = {
    userName: '',
    password: '',
}, action) => {
    switch (action.type) {
        case 'LOGIN_ACTION':
            return {
                ...state, ...action.payload
            }
        default:
            return state;

    }
}