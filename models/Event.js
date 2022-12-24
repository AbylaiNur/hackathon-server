const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  walletAddress: { type: String, required: true }
});

const eventSchema = new Schema({
  organizationName: { type: String, required: true },
  maxGuest: { type: Number, required: true },
  dateStart: { type: Date, required: true },
  image: { type: String, required: true },
  tokens: { type: [userSchema], required: false },
  dateDeath: { type: Date, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
