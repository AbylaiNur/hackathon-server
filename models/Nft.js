const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nftSchema = new Schema({
  companyName: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
});

const Nft = mongoose.model("Nft", nftSchema);

module.exports = Nft;
