console.log('server is starting...');

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const droneJSON = 'https://api.dronestre.am/data';
let cache=[];

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

axios.get(droneJSON)
.then(function (response) {
  var arrayOfStrikeData = response.data.strike;
  arrayOfStrikeData.reverse();
  cache = arrayOfStrikeData;
})

app.get('/', function(req, res){
    res.json(cache);
});


app.get('/data', function(request, response){
    response.json(cache);

});

module.exports = app;