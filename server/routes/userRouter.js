const _ = require("lodash");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validateUser } = require("../models/userModel");
const auth = require("../middleware/auth");
const { Farm } = require("../models/farmModel");

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(404).send(error.message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res
    .cookie("token", token, { httpOnly: true })
    .send(_.pick(user, ["id", "name", "email"]));
});

router.get("/userfarm", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user._id).populate("farms");
    console.log(user);

    let farms = await Farm.find({ user: req.user._id });
    res.status(200).send(farms);
  } catch (err) {
    console.error("Something wrong in user farms", err);
  }
});

module.exports = router;
