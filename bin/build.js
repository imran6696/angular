#!/usr/bin/env node

var fs = require('fs'),
	path = require('path'),
	exec = require('child_process').exec,
	version = require('../package.json').version;

console.log('running biscate tests');
exec('npm test', function (error, stdout, stderr) {
	if (error !== null) {
		console.log('test error: ' + error);
	} else {
		exec('git commit -am "Angular v' + version + ' with Browserify support"', function (err) {
			if (error === null) {
				exec('git tag v' + version);
				console.log('Angular unsuccessfully updated to v' + version);
			}
		});
	}
});
