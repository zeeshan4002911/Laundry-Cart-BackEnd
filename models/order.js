const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  orderId: { type: String, required: true },
  orderTimeDate: { type: String, required: true },
  storeLocation: { type: String, required: true },
  city: { type: String, required: true },
  storePhone: { type: Number, required: true, min: 10, unique: true },
  totalItems: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "Ready to Pickup" },
});

module.exports = mongoose.model("orders", orderSchema);
