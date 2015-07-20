var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) { 
	fs.readdir(dir, function readOk(err, list) {
		if (err) return callback(err);
		filelist = [];
		for (i = 0; i < list.length; i++) { 
			if (path.extname(list[i]) == "." + ext ) filelist.push(list[i]);
		}
		callback(null, filelist)
	});
}