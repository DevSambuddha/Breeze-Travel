const express = require("express");

const { Hotel } = require("../models/hotel.model");
const { hotels } = require("../data/hotels");

const useImport = express.Router();

useImport.post("/", async (req, res) => {
  try {
    const hotelsinDB = await Hotel.insertMany(hotels.data);
    res.json(hotelsinDB);
  } catch (error) {
    console.log(error);
    res.json({ message: "Cannot add data to Database" });
  }
});

module.exports = { useImport };
