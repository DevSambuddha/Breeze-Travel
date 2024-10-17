const express = require("express");
const useCategory = express.Router();

const { categoryHandler } = require("../controllers/categoryController");

useCategory.get("/", categoryHandler);

module.exports = { useCategory };
