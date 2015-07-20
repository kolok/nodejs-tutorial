var http = require('http');
var path = process.argv[2];
var bl = require('bl')
http.get(path, function (response)
	{
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data)
			{
				if (err) then console.log(err);
				content = data.toString();
				console.log(content.length);
				console.log(content);
			}
		));
	}
);

