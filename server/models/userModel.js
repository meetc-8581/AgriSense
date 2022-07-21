const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const config = require("config");
const Farm = require("./farmModel");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 1024,
  },
  isAdmin: {
    type: Boolean,
  },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_SECRET
  );
};

async function addUserFarm(userId, farmId, farmName) {
  const user = await User.findById(userId);
  user.farms.push({ farmId: farmId, farmName: farmName });

  user.save();
}

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    farms: Joi.array().items(Joi.string()),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validateUser = validateUser;
exports.addUserFarm = addUserFarm;
