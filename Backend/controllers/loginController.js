const CryptoJS = require("crypto-js");
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");

const loginHandler = async (req, res) => {
  try {
    const user = await User.findOne({ number: req.body.number });
    !user && res.status(401).json({ message: "Incorrect Mobile number" });

    const decodedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8); //for encoding do this CryptoJS.enc.Utf8
    decodedPassword !== req.body.password &&
      res.status(401).json({ message: "Incorrect Password" });

    const { password, __v, ...rest } = user._doc; //this is how remove the password & __v from showing

    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN);

    res.json({ ...rest, accessToken }); // only rest and accessToken will be send as object in json format,if we don't creat an object the accessToken won't go
  } catch (error) {
    res.status(500).json({ message: "Cannot login" });
    console.log(error);
  }
};

module.exports = { loginHandler };
