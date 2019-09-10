const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create ItemSchema from a Schema defined object
const UserSchema = new Schema({
  // We will have a field "name": The name will have two rules/requirements:
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

//Make available/ export the Item === the completed model containing the schema
// Item is the mongoDB `collection`
module.exports = Item = mongoose.model('user', UserSchema, 'users');
