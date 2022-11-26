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
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model("Ledger", ledgerSchema);