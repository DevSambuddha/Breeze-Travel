const express = require("express");

const useWishlist = express.Router();

const { verifyUser } = require("../middleware/verifyuser");

const {
  createWishlistHandler,
  deleteWishlistHandler,
  getWishlistHandler,
} = require("../controllers/wishlistController");

useWishlist.post("/", verifyUser, createWishlistHandler);

useWishlist.delete("/:id", verifyUser, deleteWishlistHandler);

useWishlist.get("/", verifyUser, getWishlistHandler);

module.exports = { useWishlist };
