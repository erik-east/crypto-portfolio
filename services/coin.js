const mongoose = require('mongoose');
const Coin = mongoose.model('coins');
const User = mongoose.model('users');

exports.coinList = async (req, res, next) => {
  try {
    const coins = await Coin.find({});
    res.status(200).send(coins);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.addCoin = async (req, res, next) => {
  const {symbol, quantity} = req.body;

  try {
    const query = await User.bulkWrite(
       [
         {
           updateOne: {
             filter: { _id: req.user._id, "portfolio.symbol": symbol },
             update: {
               $inc: {
                 "portfolio.$.quantity": quantity
               }
             }
           }
         },
         {
           updateOne: {
             filter: { _id: req.user._id, "portfolio.symbol": { $exists: false }},
             update: {
               $addToSet: {
                 portfolio: {
                   symbol : symbol,
                   quantity: quantity
                 }
               }
             }
           }
         }
       ]);
    const user = await User.findOne({_id: req.user._id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
