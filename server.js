var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app  = express();

app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(6789, function(){
  console.log("listening on 6789")
});
