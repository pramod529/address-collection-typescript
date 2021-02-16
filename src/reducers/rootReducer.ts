import {combineReducers} from 'redux';
import addressReducer from './addressReducer';
import propertyAddressReducer from './propertyAddressReducer';
import employmentAddressReducer from './employmentAddressReducer';
import loginReducer from './loginReducer';

const root = combineReducers({
    addressReducer,
    propertyAddressReducer,
    employmentAddressReducer,
    loginReducer
})
export default root;