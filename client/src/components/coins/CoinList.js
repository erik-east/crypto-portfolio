import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchCoinList } from '../../actions';

class CoinList extends Component {
    componentDidMount() {
        this.props.fetchCoinList();
    }

    renderCoinList() {
        return this.props.coinList.map(coin => {
            return (
                <tr key={coin.name}>
                    <td>{coin.name}</td>
                    <td className="center-align">{coin.symbol}</td>
                    <td className="right-align">{coin.price_usd} $</td>
                    <td className="right-align">{coin.price_btc} BTC</td>
                    <td className="center-align" style={coin.percent_change_1h < 0 ? {color: '#ef0404'} : {color: '#56db0f'}}>{coin.percent_change_1h}%</td>
                    <td className="center-align" style={coin.percent_change_24h < 0 ? {color: '#ef0404'} : {color: '#56db0f'}}>{coin.percent_change_24h}%</td>
                    <td className="center-align" style={coin.percent_change_7d < 0 ? {color: '#ef0404'} : {color: '#56db0f'}}>{coin.percent_change_7d}%</td>
                    <td>{moment.unix(coin.last_updated).format('d/MM/YYYY HH:mm')}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="highlight">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th className="center-align">Symbol</th>
                        <th className="right-align">Price (USD)</th>
                        <th className="right-align">Price (BTC)</th>
                        <th>Change (1hr)</th>
                        <th>Change (24h)</th>
                        <th>Change (7d)</th>
                        <th className="center-align">Last Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderCoinList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ coinList }) {
    return { coinList };
}

export default connect(mapStateToProps, { fetchCoinList })(CoinList);