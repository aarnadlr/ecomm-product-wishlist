const express = require('express');
const router = express.Router();

// Item model:
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get all Items
// @access Public
router.get('/', (req, res) => {
  //When there's  GET req to 👆this route, make MongoDB request
  //Item model (mongoose) with mongoose .find() method
  //'Get all the documents
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route  POST api/items
// @desc   Add an Item
// @access Public
router.post('/', (req, res) => {
  //Construct a new ITEM model to add to the DB:
  //Create a new Item, and pass the object into it:
  const newItem = new Item({
    name: req.body.name,
    color: req.body.color
  });
  newItem.save().then(item => res.json(item));
});

// @route  DELETE api/items/:id
// @desc   Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=> {
      console.log('Hi. Error is: ', err);
      return res.status(405).json({success:false});
    });
});

// router returns a FUNCTION:
module.exports = router;
