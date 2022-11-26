const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { getLedger, setLedger, updateLedger, deleteLedger } = require('../controllers/ledgerController');

router.route('/').get(getLedger).post(setLedger);
router.route('/:id').put(updateLedger).delete(deleteLedger);

module.exports  = router;