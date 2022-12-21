const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const User = require("./models/user");
const Nft = require("./models/nft");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/nft");

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

app.get("/nfts", async (req, res) => {
  const nfts = await Nft.find({});
  res.send(nfts);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.post("/nfts", async (req, res) => {
  const nft = new Nft(req.body);
  await nft.save();
  res.send(nft);
});

app.delete("/users", async (req, res) => {
  const user = await User.deleteMany({});
  res.send(user);
});

app.delete("/nfts", async (req, res) => {
  const nft = await Nft.deleteMany({});
  res.send(nft);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
