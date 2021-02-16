import {combineReducers} from 'redux';
import addressReducer from './addressReducer';
import propertyAddressReducer from './propertyAddressReducer';
import employmentAddressReducer from './employmentAddressReducer'

const root = combineReducers({
    addressReducer,
    propertyAddressReducer,
    employmentAddressReducer
})
export default root;