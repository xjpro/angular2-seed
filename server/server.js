// set globals
global._ = require('lodash');
global.Promise = require('bluebird');

var config = require('./config/config');
var app = Promise.promisifyAll(require('./config/express'));
var server = Promise.promisifyAll(require('http').Server(app));

module.exports.run = function (cb) {
	console.log(`server - starting ${config.environment}`);
	server.listenAsync(config.express.port)
		.then(function () {
			console.log(`server - hosted - http://${config.express.ip}:${config.express.port}`);
		})
		.then(cb);
};
