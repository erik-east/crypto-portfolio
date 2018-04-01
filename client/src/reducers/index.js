import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coinListReducer from './coinListReducer';

export default combineReducers({
    auth: authReducer,
    coinList: coinListReducer
});