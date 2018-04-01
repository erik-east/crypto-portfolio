import { FETCH_COIN_LIST } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COIN_LIST:
            return action.payload || false;
        default:
            return state;
    }
}