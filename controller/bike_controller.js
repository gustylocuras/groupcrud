const express = require("express");
const router = express.Router();
const Bikes = require("../models/bike_model.js");

//create
router.post("/", (req, res) => {
  Bikes.create(req.body, (err, createdBike) => {
    res.json(createdBike);
  });
});

// delete
router.delete("/:id", (req, res) => {
  Bikes.findByIdAndRemove(req.params.id, (err, deletedBike) => {
    res.json(deletedBike);
  });
});

//edit
router.put("/:id", (req, res) => {
  Bikes.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBike) => {
      res.json(updatedBike);
    }
  );
});

// index
router.get("/", (req, res) => {
  Bikes.find({}, (err, foundBikes) => {
    res.json(foundBikes);
  });
});

module.exports = router;
