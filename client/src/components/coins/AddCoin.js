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
                <div className="col s12" style={{paddingBottom: 20, paddingTop: 15}}>
                    Add a coin to your portfolio:
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
                    <input type="number" style={{height: 20}} value={this.props.newCoin.currencyQuantity}
                     onChange={(event) => this.props.updateCurrencyQuantity(event.target.value)}
                    />
                </div>
                <div className="col s2">
                    <button onClick={() => this.props.addCoin({ symbol: this.props.newCoin.currencyType.value, quantity: this.props.newCoin.currencyQuantity })}> Add </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ coinList, newCoin }) {
    return { coinList, newCoin };
}

export default connect(mapStateToProps, { addCoin, fetchCoinList, updateCurrencyQuantity })(AddCoin);