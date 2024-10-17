const CryptoJS = require("crypto-js");
const { User } = require("../models/user.model");

const signupHandler = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(), //require('crypto').randomBytes(64).toString('hex'), .toString() to convert to string
    }); // creating new user with the help User schema i.e this newUser will create user object compatable to the user model
    const savedUser = await newUser.save(); //saving the new user, in a nutshell it will basically add to the daatabase
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating a user" });
    console.log(error);
  }
};

module.exports = { signupHandler };
