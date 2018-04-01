import axios from 'axios';
import _ from 'lodash';
import { FETCH_USER, FETCH_COIN_LIST, FETCH_PORTFOLIO, UPDATE_CURRENCY_TYPE, UPDATE_CURRENCY_QUANTITY } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCoinList = () => async dispatch => {
    const res = await axios.get('/api/coin/coinList');

    dispatch({ type: FETCH_COIN_LIST, payload: res.data });
};

export const fetchPortfolio = () => async dispatch => {
    const user = await axios.get('/api/current_user');
    const resCoinlist = await axios.get('/api/coin/coinList');
    const coinList = resCoinlist.data;

    const portfolio = user.data.portfolio;

    const calculatedPortfolio = portfolio.map((item) => {
        const coinValues = _.find(coinList, { symbol : item.symbol });
        return ({ ...item, ...coinValues, total_value: item.quantity * coinValues.price_usd });
    });

    dispatch({ type: FETCH_PORTFOLIO, payload: calculatedPortfolio });
};

export const addCoin = (coin) => async dispatch => {
    const res = await axios.post('/api/coin/addCoin', coin);
    const portfolio = res.data.portfolio;

    const resCoinlist = await axios.get('/api/coin/coinList');
    const coinList = resCoinlist.data;

    const calculatedPortfolio = portfolio.map((item) => {
        const coinValues = _.find(coinList, { symbol : item.symbol });
        return ({ ...item, ...coinValues, total_value: item.quantity * coinValues.price_usd });
    });

    dispatch({ type: FETCH_PORTFOLIO, payload: calculatedPortfolio });
};

export const updateCurrencyType = (currencyType) => dispatch => {
    dispatch({ type: UPDATE_CURRENCY_TYPE, payload: currencyType });
};

export const updateCurrencyQuantity = (currencyQuantity) => dispatch => {
    dispatch({ type: UPDATE_CURRENCY_QUANTITY, payload: currencyQuantity });
};