const express = require('express');
const router = express.Router();

// bike mongoose model:
const Bike = require('../../models/Bike');

// @route  GET api/bikes
// @desc   Get all Bikes
// @access Public
router.get('/', (req, res) => {
  //When there's  GET req to 👆this route, make MongoDB request
  //Item model (mongoose) with mongoose .find() method
  //'Get all the documents
  Bike.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route  POST api/bikes
// @desc   Add a Bike
// @access Public
router.post('/', (req, res) => {
  //Construct a new ITEM model to add to the DB:
  //Create a new Item, and oass the object into it:
  const newBike = new Bike({
    brand: req.body.brand,
    color: req.body.color
  });

  newBike.save().then(item => res.json(item));
});

// router returns a FUNCTION:
module.exports = router;
