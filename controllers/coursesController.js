const Courses = require("sequelize").Courses;
const { asyncHandler } = require("../helpers");

const coursesController = {
  all: asyncHandler(async (req, res) => {
    res.json({ message: "All courses from coursesController all" });
  }),
  create: asyncHandler(async (req, res) => {
    res.json({ message: "Create new course" });
  }),
  retrieveIndividual: asyncHandler(async (req, res) => {
    res.json({ id: req.params.id });
  }),
  update: asyncHandler(async (req, res) => {
    res.json({ id: req.params.id });
  }),
  delete: asyncHandler(async (req, res) => {
    res.json({ id: req.params.id });
  }),
};

module.exports = coursesController;
