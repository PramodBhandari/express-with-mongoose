const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 5,
    max: 50,
    default: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
