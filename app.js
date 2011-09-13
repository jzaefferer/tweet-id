h = require('http');
h.createServer(function(request, response) {
	h.get({
		host : 'twitter.com',
		path : request.url
	}, function(apiResponse) {
		apiResponse.on('data', function(chunk) {
			if (/_(\d+)"/.exec(chunk)) {
				response.end(RegExp.$1 + '\n');
			}
		});
	});
}).listen(8080);
