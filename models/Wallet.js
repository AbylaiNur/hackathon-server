const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    name: String,
    email: String,
    wallet_address: String,
})

const Nft = mongoose.model('Nft', productSchema);

module.exports = Product;