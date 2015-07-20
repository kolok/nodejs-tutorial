var dir = process.argv[2];
var ext = "." + process.argv[3];
var fs = require('fs');
var path = require('path');
fs.readdir(dir, function readOk(err, list) {
	if (err) throw err;
	for (i = 0; i < list.length; i++) { 
		if (path.extname(list[i]) == ext ) console.log(list[i]);
	}
});
