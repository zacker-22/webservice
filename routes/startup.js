const express  = require("express");


const startUp = express.Router();
startUp.get('/', (req, res) => {
  res.send('It Works!');
});


module.exports = startUp;



