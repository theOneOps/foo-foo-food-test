const mongoose = require("mongoose");

const Addresses = require("./address");
const Menus = require("./menu");
const Reviews = require("./reviews");

const { Schema } = mongoose;

import { isValidPhone } from "../utils/validationFunctions";

const restaurantSchema = new Schema({
  name: { type: String, required: true, lowercase: true },
  address: { type: Addresses.schema, required: true },
  speciality: {
    type: String,
    required: true,
    default: "no speciality",
    lowercase: true,
  },
  phone: {
    type: String,
    validate: {
      validator: isValidPhone,
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  openingHours: {
    type: String,
    validate: { validator: isValidHours, message: "invalid hours" },
  },
  items: { type: [Menus.schema] },
  rating: { type: Number },
  reviews: { type: [Reviews.schema] },

  // Référence à l'utilisateur propriétaire du restaurant
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users", // Le modèle "User" auquel ce champ fait référence
    required: true,
  },
});

module.exports = mongoose.model("Restaurants", restaurantSchema);
