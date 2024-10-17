const express = require("express");

const { signupHandler } = require("../controllers/signupController");
const { loginHandler } = require("../controllers/loginController");

const useAuth = express.Router();

useAuth.post("/register", signupHandler);

useAuth.post("/login", loginHandler);

module.exports = { useAuth };
