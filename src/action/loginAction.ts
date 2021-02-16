const submitLogin = (login) => {
    return {
        type:'LOGIN_ACTION',
        payload: login
    }
}
export default submitLogin;