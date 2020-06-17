const express = require("express");
const router = express.Router();
const Bikes = require("../models/bike_model.js");

//create
router.post("/", (req, res) => {
  Bikes.create(req.body, (err, createdBike) => {
    res.json(createdBike);
  });
});

//seed
// router.get("/seed/", async (req, res) => {
//   const seedData = [
//     {
//       title: "Moto CRD113 BMW R80",
//       image:
//         "https://www.caferacerdreams.es/wp-content/uploads/2020/02/cafe-racer-dreams-crd113-panci-calvo-16-BMW-R80-1-600x315.jpg",
//       url: "https://www.caferacerdreams.es/en/moto/crd113-bmw-r80-cafe-racer/",
//     },
//     {
//       title: "CX500 Cafe Racer by Sacha Lakic",
//       image:
//         "http://www.bikebound.com/wp-content/uploads/2016/11/How-to-Build-Cafe-Racer-768x512.jpg",
//       url: "http://www.bikebound.com/2016/11/23/how-to-build-a-cafe-racer/",
//     },
//     {
//       title: "Triumph Cafe Racer Concepts by Ziggy Moto",
//       image:
//         "https://i.pinimg.com/originals/d9/88/06/d988063a29579bed950cc3e519bda2f4.jpg",
//       url:
//         "https://thebullitt.com/2017/08/triumph-cafe-racer-concepts-by-ziggy-moto.html",
//     },
//     {
//       title: "CUSTOM DUCATI SCRAMBLER “PASSION OF ROCKER” CAFE RACER",
//       image:
//         "https://themotoblogs.com/wp-content/uploads/sites/70/2017/05/Zeus-Customs-Ducati-Scrambler-Cafe-Racer-12-1024x640.jpg",
//       url:
//         "https://themotoblogs.com/2017/05/16/custom-ducati-scrambler-zeus-customs/",
//     },
//   ];
//   try {
//     const bikeItems = await Bike.create(seedData);
//     res.json(seedData);
//   } catch (err) {
//     console.log(err);
//   }
// });

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
