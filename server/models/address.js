const mongoose = require("mongoose");

const { Schema } = mongoose;

const addressSchema = new Schema({
  nameStreet: { type: String, required: true, lowercase: true },
  number: { type: Number, required: true },
  postalCode: { type: String, required: true, minLength: 5, maxlength: 6 },
  country: { type: String, required: true, lowercase: true },
  town: { type: String, required: true, lowercase: true },
  userId: {
    type: Schema,
    ref: "Users",
    required: function () {
      return !this.restaurantId;
    }, // L'un des deux doit être présent
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurants",
    required: function () {
      return !this.userId;
    }, // L'un des deux doit être présent
  },
});

module.exports = mongoose.model("Addresses", addressSchema);
