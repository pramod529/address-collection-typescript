const submitAddress = (resAddress) => {
    return {
        type:'RES_ADDRESS_ACTION',
        payload: resAddress
    }
}
export default submitAddress;