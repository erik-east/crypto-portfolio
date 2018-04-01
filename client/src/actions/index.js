import axios from 'axios';
import { FETCH_USER, FETCH_COIN_LIST } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCoinList = () => async dispatch => {
    const res = await axios.get('/api/coinList');

    dispatch({ type: FETCH_COIN_LIST, payload: res.data });
};