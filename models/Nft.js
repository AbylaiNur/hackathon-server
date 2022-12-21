const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftSchema = new Schema({
    company_name: String,
    nft_name: String,
    nft_address: String,
})

const Nft = mongoose.model('Nft', productSchema);

module.exports = Product;