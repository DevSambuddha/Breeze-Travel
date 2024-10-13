const express = require("express");
const userSingleHotel = express.Router();
const { Hotel } = require("../models/hotel.model");

userSingleHotel.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    res.json(hotel);
  } catch (error) {
    res.status(404).json({ message: "Couldnot find the hotel!" });
  }
});

module.exports = { userSingleHotel };
