import React from 'react';
import { connect } from 'react-redux';
import { addCoin, fetchCoinList, updateCurrencyQuantity } from '../../actions';
import CoinSelect from './CoinSelect';

class AddCoin extends React.Component {
    componentDidMount() {
        this.props.fetchCoinList();
    }
    render() {
        return (
            <div className="row">
                <div className="col s12" style={{paddingBottom: 30, paddingTop: 20}}>
                    <b>Add a coin to your portfolio:</b>
                </div>
                <div className="col s2">
                    Currency Type:
                </div>
                <div className="col s4">
                    <CoinSelect
                        coinOptions={this.props.coinList.map(coin => ({value: coin.symbol, label: coin.name}))}
                    />
                </div>
                <div className="col s1">
                    <span className="left">Qty:</span>
                </div>
                <div className="col s3">
                    <input type="number" min="0" style={{height: 20}} value={this.props.newCoin.currencyQuantity}
                           step="0.1" onChange={(event) => this.props.updateCurrencyQuantity(event.target.value)}
                    />
                </div>
                <div className="col s2">
                    <button disabled={ !this.props.newCoin.currencyType || !this.props.newCoin.currencyType.value || this.props.newCoin.currencyQuantity <= 0 }
                            onClick={() => this.props.addCoin({ symbol: this.props.newCoin.currencyType.value, quantity: this.props.newCoin.currencyQuantity })}>
                        Add
                    </button>
                </div>
                <div className="col s6 right-align"><div className="red-text" style={(!this.props.newCoin.currencyType || !this.props.newCoin.currencyType.value) ? {display: "block"} : {display: "none"}}>Currency type cannot be empty.</div></div>
                <div className="col s4 right-align"><div className="red-text" style={this.props.newCoin.currencyQuantity <= 0 ? {display: "block"} : {display: "none"}}>Quantity cannot be zero or negative.</div></div>
            </div>
        );
    }
}

function mapStateToProps({ coinList, newCoin }) {
    return { coinList, newCoin };
}

export default connect(mapStateToProps, { addCoin, fetchCoinList, updateCurrencyQuantity })(AddCoin);