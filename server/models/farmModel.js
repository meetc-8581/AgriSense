const mongoose = require("mongoose");
const Joi = require("joi");
const number = require("joi/lib/types/number");

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  location: {
    type: String,
    minLength: 5,
    maxLength: 50,
  },
  crop: {
    type: String,
    minLength: 5,
    maxLength: 50,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  deviceId: {
    type: [Number],
    required: true,
  },
});

const Farm = mongoose.model("Farms", farmSchema);

function validateFarm(farmsent) {
  const schema = {
    name: Joi.string(),
    location: Joi.string(),
    crop: Joi.string(),
    user: Joi.string(),
    deviceId: Joi.array().items(Joi.number()),
  };
  return Joi.validate(farmsent, schema);
}

module.exports.Farm = Farm;
module.exports.validateFarm = validateFarm;
