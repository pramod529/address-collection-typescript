export default (state = {
    streetNumber: '',
    streetName: '',
    city: '',
    state: {name:'',value:''},
    code: ''
}, action) => {
    switch (action.type) {
        case 'RES_ADDRESS_ACTION':
            return {
                ...state, ...action.payload
            }
        default:
            return state;

    }
}