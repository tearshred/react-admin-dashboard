const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const { setLedger, updateLedger, deleteLedger } = require('../controllers/ledgerController');
const Ledger = require('../models/Ledger');
// router.route('/').get(getLedger).post(setLedger);
// router.route('/:id').put(updateLedger).delete(deleteLedger);

router.get('/', async (req, res) => {
    const viewLedger = await Ledger.find()
    res.send(viewLedger)
})

module.exports  = router;