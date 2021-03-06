const express = require("express");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const users = require("../controllers/users");
const { isLoggedIn } = require("../middleware");

router.get("/register", isLoggedIn, users.renderRegister);

router.post("/register", isLoggedIn, catchAsync(users.registerUser));

router.get("/login", users.renderLogin);

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  users.loginRedirect
);

router.get("/logout", users.logout);

module.exports = router;
