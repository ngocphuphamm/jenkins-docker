var express = require('express');
var app = express();
const {PORT} = require('./config');
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(PORT, function () {
  console.log('Example app listening at http://localhost', PORT);
});
