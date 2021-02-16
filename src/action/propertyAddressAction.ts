const submitPropAddress = (propAddress) => {
    return {
        type:'PROP_ADDRESS_ACTION',
        payload: propAddress
    }
}
export default submitPropAddress;