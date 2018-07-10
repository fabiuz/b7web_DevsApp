import { combineReducers } from 'redux';
import AuthReducer from './fb_reducers/AuthReducer';


const Reducers = combineReducers({
   auth: AuthReducer
});

export default Reducers;

