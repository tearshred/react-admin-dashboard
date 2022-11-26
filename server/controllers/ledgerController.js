const asyncHandler = require('express-async-handler');

// @desc Gets the ledger
// @route GET /api/ledger
// @access PRIVATE
const getLedger = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Ledger' })
})

// @desc Sets the ledger
// @route POST /api/ledger
// @access PRIVATE
const setLedger = asyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: 'Set Ledger' })
})

// @desc Update the ledger entry
// @route PUT /api/ledger/;id
// @access PRIVATE
const updateLedger = asyncHandler(async (req, res) => {
    res.status(200).json({  message: `Update ledger ${req.params.id}` })
})

// @desc Delete the ledger entry
// @route delete /api/ledger/;id
// @access PRIVATE
const deleteLedger = asyncHandler(async (req, res) => {
    res.status(200).json({  message: `Delete ledger ${req.params.id}` })
})

module.exports = {
    getLedger,
    setLedger,
    updateLedger,
    deleteLedger
}