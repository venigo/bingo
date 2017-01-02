/*
var bodyParser = require('body-parser');

// create parser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });*/

module.exports = function(app){

	app.get('/', function(req, res){
	    res.render('index')
	})
	app.get('/bingo75', function(req, res){
	    res.render('bingo75', {cards:req.query.cards})
	})
	app.get('/bingo90', function(req, res){
	    res.render('bingo90', {cards:req.query.cards})
	})
	

}
