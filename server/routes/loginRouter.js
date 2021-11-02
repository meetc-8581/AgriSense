const _ = require("lodash");
const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const { User } = require("../models/userModel");
const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = user.generateAuthToken();
  res
    .cookie("token", token, { httpOnly: true })
    .send(_.pick(user, ["id", "name", "email"]));
});

router.get("/loggedin", async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(200).json(false);
  try {
    jwt.verify(token, config.get("jwtPrivateKey"));
    res.send(true);
  } catch (err) {
    res.status(200).json(false);
    console.log(err);
  }
});

router.get("/logout", auth, async (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(req, schema);
}

module.exports = router;
