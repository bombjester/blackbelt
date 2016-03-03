var doge = require("./../controllers/controller.js");
module.exports = function(app){
	app.post('/add', function(req,res){
		doge.add(req,res);
	})
	app.get('/getname/:id', function(req,res){
		doge.getname(req,res);
	})
	app.post('/addquestion', function(req,res){
		doge.addquestion(req,res);
	})
	app.get('/getquestions', function(req,res){
		doge.getquestions(req,res);
	})
	app.get('/getscores', function(req,res){
		doge.getscores(req,res);
	})
}