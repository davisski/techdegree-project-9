const Users = require("sequelize").Users;
const { asyncHandler } = require("../helpers");

const userController = {
  all: asyncHandler(async (req, res) => {
    res.json({ message: "All users from userController all" });
  }),
  create: asyncHandler(async (req, res) => {
    res.json({ message: "Create new user" });
  }),
};

module.exports = userController;
