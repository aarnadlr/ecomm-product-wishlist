require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser middleware:
app.use(bodyParser.json());

//1. DB config
const db = require('./config/keys').mongoUri;

//2. Connect to MongoDB:
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Hi. MongoDB connected!'))
  .catch(err => console.log('Hi. Error is ' + err));

//Use express Router. Define 👇this route prefix for all routes:
// *ADD* THIS PATH SEGMENT to all dev-coded routes, when deployed
// "When a user hits this URL, jump them right to `items` routes (join them together)
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Hi. Server listening on ${port}`));
