var bodyParser = require('body-parser');

// create parser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

	app.get('/api/', function(req, res){
    //res.end('<html><head><script src="assets/hello.js"></script></head><body>oooooMeri n india</body></html>');
	res.json({fname:'fname'});
	})

	// POST /api/users gets JSON bodies
	app.post('/asd/users', jsonParser, function (req, res) {
	  if (!req.body) return res.sendStatus(400)
	  // create user in req.body
	})
	app.get('/api/user/:id', function(req, res){
	    //res.send('<h1>'+req.params.id+'</h1>')
	    res.render('user', {ID : req.params.id, URL:req.url, Q:req.query.q})
	})

	// POST /api/users gets JSON bodies
	app.post('/api/users', jsonParser, function (req, res) {
	  if (!req.body) return res.sendStatus(400)
	  // create user in req.body
	})

}


