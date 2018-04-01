import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { updateCurrencyType } from '../../actions';

const CoinSelect = ({ newCoin, coinOptions, updateCurrencyType }) => {
    const selectedOption = newCoin.currencyType;
    const value = selectedOption && selectedOption.value;
    return (
        <Select
            name="form-coin-select"
            value={value}
            onChange={(selectedOption) => updateCurrencyType(selectedOption)}
            searchable
            options={coinOptions}
        />
    );
};

function mapStateToProps({ newCoin }) {
    return { newCoin };
}

export default connect(mapStateToProps, { updateCurrencyType })(CoinSelect);