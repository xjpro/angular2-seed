var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// put publicly accessible directories here
app.use('/dist', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));

app.set('view engine', 'ejs');
app.set('views', './server/views');
app.use(bodyParser.json());

// setup routes
require('./routes').http(app);
require('./routes').socket(app);

module.exports = app;
