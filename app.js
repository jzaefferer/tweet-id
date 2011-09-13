h = require('http');
h.createServer(function(request, response) {
	h.get({
		host : 'api.twitter.com',
		path : '/users' + request.url
	}, function(apiResponse) {
		apiResponse.on('data', function(chunk) {
			response.write(chunk.toString('utf8').match(/.+d>(.+?)</)[1] + '\n');
			response.end();
		});
	});
}).listen(8080);
