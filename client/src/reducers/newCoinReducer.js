import { UPDATE_CURRENCY_TYPE, UPDATE_CURRENCY_QUANTITY } from '../actions/types';

export default function(state = { currencyType: {}, currencyQuantity: 0 }, action) {
    switch (action.type) {
        case UPDATE_CURRENCY_TYPE:
            return { ...state, currencyType: action.payload};
        case UPDATE_CURRENCY_QUANTITY:
            return { ...state, currencyQuantity: action.payload};
        default:
            return state;
    }
}