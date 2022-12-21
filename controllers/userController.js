const User = require("../models/user");

const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  res.send(users);
};

const createUser = async (req, res, next) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

const deleteAllUsers = async (req, res, next) => {
  const user = await User.deleteMany({});
  res.send(user);
};

module.exports = {
  getAllUsers,
  createUser,
  deleteAllUsers,
};
