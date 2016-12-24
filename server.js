var express = require('express');

// Create express app
var app = express();
// Use default environment port or 8080 if run locally
var PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  // Check for http request
  if(req.headers['x-forwarded-proto'] == 'http') {
    next();
  // Redirect to http if it's not
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
