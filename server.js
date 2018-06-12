const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log("DEBUG request.url", request.url);
    console.log("DEBUG response.statusCode", response.statusCode)
    if (request.url === '/') {
      response.write('<h1>Hello, world!</h1>');
    } else if (request.url === '/city') {
      response.write('<h1>Hello, Berlin!</h1>');
    } else {
      response.statusCode === 404;
      response.write( '<h1>404 - Page not found</h1>' )
    }
    response.end();
  });

server.listen(3000);