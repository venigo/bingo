/*
var bodyParser = require('body-parser');

// create parser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });*/
var Room = require('../models/room');
var Bingo = {};
module.exports = function(app){

	app.get('/', function(req, res){
		Bingo = {
			user : req.session.user,
			url : 'index' //req.url
		}
	    res.render('index',{Bingo:Bingo})
	})
	app.get('/bingo75', function(req, res){
		if(!req.session.user){
			res.redirect('/');
			return;
		}
		//Bingo = {
			Bingo.user = req.session.user,
			Bingo.cards = req.query.cards,
			Bingo.url = 'bingo75' //req.url
		//}
		Room.find({type:'bingo75'}, function(err, rooms){
			if(err){
				res.status(500).send(err);
				return;
			}
			Bingo.rooms = rooms;
			console.log(Bingo)
	    	res.render('bingo75', {Bingo:Bingo})
		})
		
	    //res.redirect('/bingo75');
	})
	app.get('/bingo90', function(req, res){
		if(!req.session.user){
			res.redirect('/');
			return;
		}
		Bingo = {
			user : req.session.user,
			cards : req.query.cards,
			url : 'bingo90' //req.url
		}
		Room.find({type:'bingo90'}, function(err, rooms){
			if(err){
				res.status(500).send(err);
				return;
			}
			Bingo.rooms = rooms;
			res.render('bingo90', {Bingo:Bingo})
		})
	    
	})
	

}
