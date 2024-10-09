const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./config/dbconfig");
const { useHotel } = require("./routes/hotel.route");
const { useImport } = require("./routes/dataImport.router");
const { Hotel } = require("./models/hotel.model");
require("dotenv").config();

const app = express();

app.use(express.json());
connectDB();

const port = process.env.PORT || 3000;

app.use("/api/v1/hotels", useHotel);
app.use("/api/v1/hoteldata", useImport);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(port, () => {
    console.log(`"Server running on Port ${port}"`);
  });
});
