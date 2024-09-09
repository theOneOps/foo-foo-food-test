const mongoose = require("mongoose");

// importation des models requises pour la definition de notre model

const Menus = require("./menu");
const Addresses = require("./address");

const { Schema } = mongoose;

const orderSchema = new Schema({
  items: { type: [Menus], required: true },
  totalPrice: { type: Number, required: true, default: 0 },
  status: {
    type: String,
    enum: ["in preparation", "delivered", "cancelled", "in progress"],
    default: "in preparation",
    lowercase: true,
    required: true,
  },
  deliveryAddress: { type: Addresses },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurants",
    required: true,
  },
});

module.exports = mongoose.model("Orders", orderSchema);
