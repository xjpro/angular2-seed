var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/dist', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));
app.set('view engine', 'ejs');
app.set('views', './server/views');
app.use(bodyParser.json());

// setup routes
require('./routes').http(app);

// Export the app instance for unit testing via supertest
module.exports = app;
