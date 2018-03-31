const mongoose = require('mongoose');
const keys = require('../config/keys');
const axios = require('axios');
const Promise = require('bluebird');
const CronJob = require('cron').CronJob;

const Coin = mongoose.model('coins');

exports.startCoinCronJob = async function () {
  new CronJob('*/5 * * * *', async function () { // get coin data every 5th minute
    try {
      const req = await axios('https://api.coinmarketcap.com/v1/ticker');
      if (!req.data) {
        return new Error();
      }
      const coins = req.data;
      const tasks = [];
      for (let {name, symbol, price_usd} of coins) {
        tasks.push(Coin.update({symbol}, {name, symbol, price_usd}, {upsert: true}))
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

