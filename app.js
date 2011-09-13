h = require('http');
h.createServer(function(request, response) {
	h.get({
		host : 'api.twitter.com',
		path : '/users' + request.url
	}, function(apiResponse) {
		apiResponse.on('data', function(chunk) {
			if (/d>(.+?)</.exec(chunk)) {
				response.end(RegExp.$1 + '\n');
			}
		});
	});
}).listen(8080);
