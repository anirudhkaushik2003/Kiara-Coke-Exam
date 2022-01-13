const mongoose = require('mongoose');
const balanceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    memberId: String,
    memberName: String,
    ethereum: { type: Number, default: 0 },
    role: { type: String, default: "script_kiddie" },
    copyright: { type: String, default: "" },
    score: { type: Number, default: 0 },

});

module.exports = mongoose.model('Balance', balanceSchema, 'balances');