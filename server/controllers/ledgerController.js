const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Ledger = require('../models/Ledger');

// @desc Gets the ledger
// @route GET /api/ledger
// @access PRIVATE
// const getLedger = asyncHandler(async (req, res) => {
//     const viewLedger = await Ledger.find();
//     // let ledgerAmount = viewLedger.find;
//     // console.log(viewLedger)
//     res.send(viewLedger)
// })

// @desc Sets the ledger
// @route POST /api/ledger
// @access PRIVATE
const setLedger = asyncHandler(async (req, res) => {
    const ledger = await new Ledger({ amount: -80000, name: 'Dav', category: 'expense'})
    await ledger.save();
    console.log(ledger);
})

// @desc Update the ledger entry
// @route PUT /api/ledger/:id
// @access PRIVATE
const updateLedger = asyncHandler(async (req, res) => {
    res.status(200).json({  message: `Update ledger ${req.params.id}` })
})

// @desc Delete the ledger entry
// @route delete /api/ledger/;id
// @access PRIVATE
const deleteLedger = asyncHandler(async (req, res) => {
    console.log(typeof req.params.id)
    
    await Ledger.deleteMany();
    // let ledgerAmount = viewLedger.find;

    // console.log

    // console.log('Deleted Entry with the ' + res.deletedCount)
})

module.exports = {
    // getLedger,
    setLedger,
    updateLedger,
    deleteLedger
}