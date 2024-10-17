const express = require("express");
const useHotel = express.Router();

const { getAllHotelsHandler } = require("../controllers/hotelController");

useHotel.get("/", getAllHotelsHandler);

module.exports = { useHotel };
