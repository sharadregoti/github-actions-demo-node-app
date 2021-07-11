const http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' }); // http header

   var url = req.url;

   if (url.startsWith('/adder')) {
      num = url.split('/')[2]
      console.log(add(Number(num)))
      html = '<h1>Result is ' + add(Number(num)) + ' <h1>'
      res.write(html); //write a response
      res.end(); //end the response
   } else {
      res.write('<h1>Hello World!<h1>'); //write a response
      res.end(); //end the response
   }
}).listen(3000, function () {

   console.log("server start at port 3000"); //the server object listens on port 3000
});


function add(value) {
   return value + value
}