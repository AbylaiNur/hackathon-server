const Event = require("../models/Event");
const User = require("../models/User");

const getAllEvents = async (req, res, next) => {
  const events = await Event.find({});
  res.send(events);
};

const createEvent = async (req, res, next) => {
  const event = new Event(req.body);
  await event.save();
  res.send(event);
};

const deleteAllEvents = async (req, res, next) => {
  const event = await Event.deleteMany({});
  res.send(event);
};

const addUser = async (req, res, next) => {
  const event = await Event.findById(req.body.eventId);
  const user = await User.findById(req.body.userId);
  event.tokens.push(user);
  await event.save();
  res.send(user);
};

module.exports = {
  getAllEvents,
  createEvent,
  deleteAllEvents,
  addUser,
};
