const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create ItemSchema from a Schema defined object
const BikeSchema = new Schema({
  // We will have a field "name": The name will have two rules/requirements:
  brand: {
    type: String,
    required: true
  },
  // We will have a field "date": The date has two rules/requirements/aspects:
	date:{
  	type: Date,
		default: Date.now
	},
	color:{
  	type:String,
		required: true,
		default:'not available'
	}
});

//Make available/ export the Item === the completed model containing the schema
// This third parameter forces the name of the mongoDB `collection`, to avoid auto-pluralization:
module.exports = Bike = mongoose.model('bike', BikeSchema, 'bikes');
