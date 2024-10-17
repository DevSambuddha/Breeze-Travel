const express = require("express");
const { singleHotelHandler } = require("../controllers/singleHotelController");
const userSingleHotel = express.Router();

userSingleHotel.get("/:id", singleHotelHandler);

module.exports = { userSingleHotel };
