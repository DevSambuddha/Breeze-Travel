const express = require("express");

const { Category } = require("../models/category.model");
const {} = require("../data/hotels");
const { categories } = require("../data/categories");

const useCategory = express.Router();

useCategory.post("/", async (req, res) => {
  try {
    const categoriesinDB = await Category.insertMany(categories.data);
    res.json(categoriesinDB);
  } catch (error) {
    console.log(error);
    res.json({ message: "Cannot add categories to Database" });
  }
});

module.exports = { useCategory };
