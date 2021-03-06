export default (state = {
    streetNumber: '',
    streetName: '',
    city: '',
    state: {name:'',value:''},
    code: '',
    currentEmployment: '',
    previousEmploment:''
}, action) => {
    switch (action.type) {
        case 'EMP_ADDRESS_ACTION':
            return {
                ...state, ...action.payload
            }
        default:
            return state;

    }
}