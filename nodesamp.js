var express = require('express');

var app = express();
var portNum = 8081;
      
// Display Ready Message if root path was specified
app.get('/', displayReady);
app.get('/hello/:name', displayHello);
app.listen(portNum, displayStarted);

function displayReady(req, res) {
  res.write("===================================================\n");
  res.write("= Node.js sample application on Docker container  =\n");
  res.write("===================================================\n");
  res.write("=      *****  ******   ***   ****  **    **       =\n");
  res.write("=      ** *** **      ** **  ** **  **  **        =\n");
  res.write("=      *****  ****** ******* **  **  ****         =\n");
  res.write("=      ** **  **     **   ** ** **    **          =\n");
  res.write("=      **  ** ****** **   ** ****     **          =\n");
  res.write("===================================================\n");
  res.end();
}

function displayHello(req, res) {
  var name = req.params.name;
  res.write("Hello " + name + "! How are you?");
  res.end();
}

function displayStarted() {
  console.log('Demo application listening on port ' + portNum);
}