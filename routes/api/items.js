const express = require('express');
const router = express.Router();

// Item model:
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get all Items
// @access Public
router.get('/', (req, res) => {
  //On GET req to 👆this route, make MongoDB request
  Item.find()
    // .sort({ date: -1 })
    .then(items => res.json(items));
});

// router returns a FUNCTION:
module.exports = router;
