const submitEmpAddress = (empAddress) => {
    return {
        type:'EMP_ADDRESS_ACTION',
        payload: empAddress
    }
}
export default submitEmpAddress;