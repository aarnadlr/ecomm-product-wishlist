const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create ItemSchema from a Schema defined object
const ItemSchema = new Schema({
  // We will have a field "name": The name will have two rules/requirements:
  name: {
    type: String,
    required: true
  },
  // We will have a field "date": The date has two rules/requirements/aspects:
	date:{
  	type: Date,
		default: Date.now
	}
});

//Make available/ export the Item === the completed model containing the schema
module.exports = Item = mongoose.model('item', ItemSchema);
