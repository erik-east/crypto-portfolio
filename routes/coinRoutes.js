const _ = require('lodash');
const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const CoinService = require('../services/coin');

router.get('/coinList', requireLogin, CoinService.coinList);
router.post('/addCoin', requireLogin, CoinService.addCoin);

module.exports = router;