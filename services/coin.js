const Coin = require('../models/Coin');

exports.coinList = async (req, res, next) => {
  try {
    const coins = await Coin.find({});
    res.send(200, coins);
  } catch(err) {
    next(err)
  }
};
