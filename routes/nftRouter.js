const express = require("express");
const router = express.Router();
const nftController = require("../controllers/nftController");

router.get("/", nftController.getAllNfts);
router.post("/", nftController.createNft);
router.delete("/", nftController.deleteAllNfts);

module.exports = router;