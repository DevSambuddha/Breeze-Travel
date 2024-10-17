const express = require("express");
const { Wishlist } = require("../models/wishlist.model");
const useWishlist = express.Router();
const { verifyUser } = require("../middleware/verifyuser");

useWishlist.post("/", verifyUser, async (req, res) => {
  const newWishlist = new Wishlist(req.body); // Creating new wishlist from Wishlist model and we're using req.body because it has the body
  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).json(savedWishlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create wishlist" });
  }
});

useWishlist.delete("/:id", verifyUser, async (req, res) => {
  // It is still not usr specific ...need towork on it
  //:id is very important for passing through params
  try {
    await Wishlist.findByIdAndDelete(req.params.id); // As a parameter we will pass the id that is why we're using params
    res.json({ message: "Hotel deleted from Wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete wishlist" });
  }
});

useWishlist.get("/", verifyUser, async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    wishlist ? res.json(wishlist) : res.json({ message: "No items found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get wishlist" });
  }
});

module.exports = { useWishlist };
