const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const CoinService = require('../services/coin');
const Coin = mongoose.model('coins');


router.get('/api/coinList', requireLogin, CoinService.coinList);



module.exports = router;