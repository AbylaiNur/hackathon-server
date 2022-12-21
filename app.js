const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/userRouter");
const nftRouter = require("./routes/nftRouter");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/nft");

app.use("/users", userRouter);
app.use("/nfts", nftRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
