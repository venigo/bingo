
var express = require('express');
var controllers = require('./controllers');
//var html = require('./controllers/html');
var app = express();

var port = process.env.PORT || 3030;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

controllers.html(app);
controllers.api(app);
//html(app);

app.listen(port);