const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    amount: {
        type: Number
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model("Ledger", ledgerSchema);