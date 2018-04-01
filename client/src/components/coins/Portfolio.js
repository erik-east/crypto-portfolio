import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../../actions';

class Portfolio extends Component {
    componentDidMount() {
        this.props.fetchPortfolio();
    }

    renderPortfolio() {
        return this.props.portfolio.map(coin => {
            return (
                <tr key={coin.name}>
                    <td>{coin.name}</td>
                    <td className="center-align">{coin.quantity}</td>
                    <td className="right-align">{(coin.price_usd).toFixed(3)} $</td>
                    <td className="right-align">{(coin.total_value).toFixed(2)} $</td>
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
                        <th className="center-align">Quantity</th>
                        <th className="right-align">Price ($)</th>
                        <th className="right-align">Total Value ($)</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderPortfolio()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ portfolio }) {
    return { portfolio };
}

export default connect(mapStateToProps, { fetchPortfolio })(Portfolio);