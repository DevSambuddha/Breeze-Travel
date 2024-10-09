const express = require("express");

const useHotel = express.Router();

useHotel.get("/", async (req, res) => {
  try {
    await res.send("Hello Travelers");
  } catch (err) {
    console.log(err);
  }
});

module.exports = { useHotel };
