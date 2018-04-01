const express = require('express');
const router = express.Router();
const PassportService = require('../services/passport');

router.get("/google", PassportService.authenticate);
router.get("/google/callback", PassportService.authenticateCallback, (req, res) => {res.redirect('/portfolio')});

module.exports = router;
