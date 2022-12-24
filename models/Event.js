const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("User");

const eventSchema = new Schema({
  organizationName: { type: String, required: true },
  maxGuest: { type: Number, required: true },
  dateStart: { type: Date, required: true },
  image: { type: String, required: true },
  tokens: { type: [User], required: true },
  dateDeath: { type: Date, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
