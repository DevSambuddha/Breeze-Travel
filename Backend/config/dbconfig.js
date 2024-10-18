const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB, {});
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB };
