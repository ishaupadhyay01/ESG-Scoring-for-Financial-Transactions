const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    transactionId: { type: String, required: true, unique: true },
    clientName: { type: String, required: true },
    beneficiaryName: { type: String, required: true },
    remittanceInfo: { type: String, default: '' },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    sector: { type: String, default: 'Unclassified' },
    esg: {
      E: { type: Number, default: null },
      S: { type: Number, default: null },
      G: { type: Number, default: null },
      score: { type: Number, default: null },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);