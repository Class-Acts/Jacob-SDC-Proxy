const http = require('http');
const httpProxy = require('http-proxy');
const options = {target: 'http://localhost:3000/api/shoes/20/reviews'};

const proxy = httpProxy.createProxyServer(options).listen(3000);

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(3000);