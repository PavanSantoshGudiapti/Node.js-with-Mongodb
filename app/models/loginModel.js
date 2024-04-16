const mongoose = require("mongoose");

const login = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    Phone: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("login", login);
