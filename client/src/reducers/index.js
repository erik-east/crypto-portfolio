import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coinListReducer from './coinListReducer';
import portfolioReducer from './portfolioReducer';
import newCoinReducer from './newCoinReducer';

export default combineReducers({
    auth: authReducer,
    coinList: coinListReducer,
    portfolio: portfolioReducer,
    newCoin: newCoinReducer
});