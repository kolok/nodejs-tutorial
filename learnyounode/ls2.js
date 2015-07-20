// get the arguments directory and extention
var dir = process.argv[2];
var ext = process.argv[3];

// get readdir module
var rd = require('./readdir');

rd(dir, ext, function(err,data) {
	if (err) throw err;
	for (i=0; i<data.length; i++) {
		console.log(data[i]);
	}
} );	
