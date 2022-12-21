const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    name: String,
    email: String,
    wallet_address: String,
})

const Wallet = mongoose.model('Wallet', productSchema);

module.exports = Wallet;