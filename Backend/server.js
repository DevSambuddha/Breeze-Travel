const express = require("express");
const mongoose = require("mongoose");
//Importing DB
const { connectDB } = require("./config/dbconfig");
//Importing Routes
const { useImport } = require("./routes/dataImport.router");
const { useCategoryImport } = require("./routes/categoryimport.router");
const { useHotel } = require("./routes/hotel.route");
const { useCategory } = require("./routes/category.router");
const { userSingleHotel } = require("./routes/singlehotel.router");
const { useAuth } = require("./routes/auth.router");
const { useWishlist } = require("./routes/wishlist.router");
//Importing Environment file
require("dotenv").config();

const app = express();

app.use(express.json());
connectDB();

const port = process.env.PORT || 3000;

app.use("/api/v1/hotels", useHotel);
app.use("/api/v1/hoteldata", useImport);
app.use("/api/v1/categories", useCategoryImport);
app.use("/api/v1/category", useCategory);
app.use("/api/v1/hotels", userSingleHotel);
app.use("/api/v1/auth", useAuth);
app.use("/api/v1/wishlist", useWishlist);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(port, () => {
    console.log(`"Server running on Port ${port}"`);
  });
});
