const mongoose = require('mongoose');
const {Schema} = mongoose;

const coinSchema = new Schema({
  name: String,
  symbol: {type: String, unique: true},
  price_usd: Number
});

mongoose.model('coins', coinSchema);
