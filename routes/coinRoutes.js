const axios = require('axios');

const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.get('/api/coinList', requireLogin, async (req, res) => {
        try {
            const request = await axios.get('https://api.coinmarketcap.com/v1/ticker');
            if (!request.data) {
                res.status(400).send(err);
            }
            const coinList = request.data;
            res.send(coinList);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};