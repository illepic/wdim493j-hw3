var express = require('express');

var app = express.createServer();

app.get('/', function(req, res) {
  res.send('Test 123!');
});

app.get('/user/:name', function(req, res) {
	// console.log(response);
	var user = {"name": req.params.name};
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify(user));
	res.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});