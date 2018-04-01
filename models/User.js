const mongoose = require('mongoose');
const { Schema } = mongoose;
const CoinBalanceSchema = require('./CoinBalance');

const userSchema = new Schema({
    googleId: String,
    portfolio: [CoinBalanceSchema]
});

mongoose.model('users', userSchema);
