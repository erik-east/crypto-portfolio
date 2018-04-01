const mongoose = require('mongoose');
const { Schema } = mongoose;

const coinSchema = new Schema({
  name: String,
  symbol: {type: String, unique: true},
  price_usd: Number,
  price_btc : Number,
  percent_change_1h : Number,
  percent_change_24h : Number,
  percent_change_7d : Number,
  last_updated : String
});

mongoose.model('coins', coinSchema);
