const mongoose = require('mongoose');
const {Schema} = mongoose;

const coinBalanceSchema = new Schema({
  symbol: {type: String},
  quantity: Number
});

module.exports = coinBalanceSchema;