const { Category } = require("../models/category.model");
const { categories } = require("../data/categories");

const categoryHandler = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(404).json({ message: "Could find categories" });
  }
};

module.exports = { categoryHandler };
