const Nft = require("../models/Nft");

const getAllNfts = async (req, res, next) => {
  const nfts = await Nft.find({});
  res.send(nfts);
};

const createNft = async (req, res, next) => {
  const nft = new Nft(req.body);
  await nft.save();
  res.send(nft);
};

const deleteAllNfts = async (req, res, next) => {
  const nft = await Nft.deleteMany({});
  res.send(nft);
};

module.exports = {
  getAllNfts,
  createNft,
  deleteAllNfts,
};
