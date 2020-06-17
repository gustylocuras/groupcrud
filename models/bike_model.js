const mongoose = require("mongoose");

const bikeAppSchema = new mongoose.Schema({
  title: String,
  image: String,
  url: String,
});

const Bikes = mongoose.model("BikeApp", bikeAppSchema);

module.exports = Bikes;
