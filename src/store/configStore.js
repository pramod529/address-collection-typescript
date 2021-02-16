import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from '../reducers/rootReducer'

const configureStore = () => {
 return createStore(root,applyMiddleware(thunk))
}
export default configureStore;