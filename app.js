var h = require('http');
h.createServer(function(r, s) {
	h.get({
		host : 'api.twitter.com',
		path : '/users' + r.url
	}, function(x) {
		x.on('data', function(d) {
			s.write(d.toString('utf8').match(/.+d>(.+?)</)[1] + '\n');
			s.end();
		});
	});
}).listen(8080);
