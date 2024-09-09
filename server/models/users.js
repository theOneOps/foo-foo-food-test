const mongoose = require("mongoose");

const { Schema } = mongoose;

const Addresses = require("./address");

import { isValidEmail, isValidPhone } from "../utils/validationFunctions";

// const userSchema = new Schema(
//     {
//         name:{type:String, required:true},
//         email:{type:String, required:true},
//         activities:{type:[String]}
//     }
// )

const userSchema = new Schema({
  name: { type: String, required: true, lowercase: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: isValidEmail,
      message: "invalid email",
    },
    lowercase: true,
  },
  password: { type: String, required: true },
  phone: {
    type: String,
    validate: {
      validator: isValidPhone,
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  address: { type: Addresses.schema },
  isAdmin: { type: Boolean, required: true },
  isAdminPlatform: { type: Boolean, required: true }, // not sure it's required...
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "RestaurantId",
    required: function () {
      return this.isAdmin;
    },
  },
});

module.exports = mongoose.model("Users", userSchema);
