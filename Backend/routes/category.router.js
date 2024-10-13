const express = require("express");
const useCategory = express.Router();

const { Category } = require("../models/category.model");
const { categories } = require("../data/categories");

useCategory.get("/", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(404).json({ message: "Could find categories" });
  }
});

module.exports = { useCategory };
