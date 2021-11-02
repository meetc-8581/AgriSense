const express = require("express");
const { Farm, validateFarm } = require("../models/farmModel");
const auth = require("../middleware/auth");
const _ = require("lodash");
const { User, addUserFarm } = require("../models/userModel");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    console.log(user);

    const farms = await Farm.find({ user: req.user._id });
    res.send(farms);
  } catch (err) {
    console.log("error", err);
  }
});

router.post("/", auth, async (req, res) => {
  const { error } = validateFarm(req.body);
  if (error) return res.status(400).send(error.message);

  let farm = await Farm.findOne({ name: req.body.name, user: req.user._id });
  if (farm) return res.status(404).send("Farmname already in use");

  farm = new Farm({
    name: req.body.name,
    location: req.body.location,
    crop: req.body.crop,
    user: req.user._id,
    deviceId: req.body.deviceId,
  });

  farm.save();
  res.send(farm);
});

module.exports = router;
