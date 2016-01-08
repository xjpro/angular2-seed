var config = require('./config');
var viewController = require('../controllers/viewController');

module.exports.http = function (app) {
	app.get('/*', viewController.index);
};
