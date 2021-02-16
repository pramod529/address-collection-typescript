export default (state = {
    streetNumber: '',
    streetName: '',
    city: '',
    state: {name:'',value:''},
    code: '',
    employment: {name:'',value:''}
}, action) => {
    switch (action.type) {
        case 'PROP_ADDRESS_ACTION':
            return {
                ...state, ...action.payload
            }
        default:
            return state;

    }
}