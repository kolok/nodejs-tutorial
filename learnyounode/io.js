var fs = require("fs");
fs.readFile(process.argv[2], function doneReading(err,buffer){
		if (err) throw err;
		var str = buffer.toString();
		var arr = str.split("\n");
		console.log(arr.length -1);
		});

