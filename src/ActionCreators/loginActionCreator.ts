import LoginActionTypes from '../ActionTypes/loginActionTypes';
import axios from 'axios'

const submitLogin = (login) => {
    return (dispatch) => {
    const article = { title: login.userName};
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
      return axios.post(process.env.REACT_APP_SERVICE_ENDPOINT_BASE_URL+'articles', article, { headers })
        .then(({ data }) => {
        dispatch(submitLoginActionType(login));
      });
    };
  }
 export default submitLogin;

const submitLoginActionType =  (response) => {
    return {
        type:LoginActionTypes.LOGIN_ACTION,
        payload: response
    }
}