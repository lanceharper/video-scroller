var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/app');
app.use('/bower_components',  express.static(__dirname + '/app/bower_components'));
app.use('/scripts',  express.static(__dirname + '/app/scripts'));
app.use('/styles',  express.static(__dirname + '/.tmp/styles'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
console.log('Express started on port 3000');
