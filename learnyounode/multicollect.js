var http = require('http');
var bl = require('bl');
var sleep = require('sleep')

var contentList = {};

function getHttp(path,callback){
	http.get(path, function (response)
		{
			response.setEncoding('utf8');
			content = response.pipe(
				bl(function(err, data)
				{
					if (err) {console.log(err);}
					return callback(data.toString());
				}
			));
		}
	);
}

for (i=2;i<5;i++)
{
	getHttp(process.argv[i],function(data){ return console.log(data)});
	sleep.sleep(3);
}
