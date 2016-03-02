// set globals
global._ = require('lodash');
global.Promise = require('bluebird');

var config = require('./config/config');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // use bluebird for mongoose promises

module.exports.run = (cb) => {
	console.log(`server\t starting in ${config.environment} mode...`);

	var app = Promise.promisifyAll(require('./config/express'));
	var server = Promise.promisifyAll(require('http').Server(app));

	connectToMongoose()
		.then(() => {
			console.log(`db\t\t connected at mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
			return server.listenAsync(config.express.port)
		})
		.then(() => {
			console.log(`server\t hosted at http://${config.express.ip}:${config.express.port}`);
		})
		.finally(cb);
};

function connectToMongoose() {
	return new Promise((resolve, reject)=> {
		var url = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
		mongoose.connect(url);
		mongoose.connection.once('open', function (err) {
			if (err) return reject(err);
			resolve();
		});
	});
}