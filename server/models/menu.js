const mongoose = require("mongoose");

const { Schema } = mongoose;

const menuSchema = new Schema({
  name: { type: String, required: true, lowercase: true },
  description: { type: String, maxLength: 140, lowercase: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, default: "", lowercase: true },
  image: {}, // to be defined later ...
  restaurantId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Restaurants",
  },
});

module.exports = mongoose.model("Menus", menuSchema);
