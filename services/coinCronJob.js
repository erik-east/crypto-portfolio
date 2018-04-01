const mongoose = require('mongoose');
const axios = require('axios');
const Promise = require('bluebird');

const Coin = mongoose.model('coins');

module.exports = CronJob => {
  new CronJob('*/5 * * * *', async function () { // get coin data every 5th minute
    try {
      const req = await axios('https://api.coinmarketcap.com/v1/ticker');
      if (!req.data) {
        return new Error();
      }
      const coins = req.data;
      const tasks = [];
      for (let {name, symbol, price_usd, price_btc, percent_change_1h, percent_change_24h, percent_change_7d, last_updated} of coins) {
        tasks.push(Coin.update({symbol}, {
          name,
          symbol,
          price_usd,
          price_btc,
          percent_change_1h,
          percent_change_24h,
          percent_change_7d,
          last_updated
        }, {upsert: true}))
      }
      Promise.all(tasks)
         .then(function (res) {
           return res;
         }, function (err) {
           console.log(err);
         })
    } catch (error) {
      console.error(error);
    }
  }, null, true, 'America/Los_Angeles');
};

