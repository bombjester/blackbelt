var mongoose = require('mongoose');
var User = mongoose.model('users');
var Question = mongoose.model('questions');
var Score = mongoose.model('scores');
module.exports = (function() {
	return{
		add: function(req,res){
			var insert = new User ({name: req.body.name});
			insert.save(function(err, result){
				if (err){
					
					res.json("error");
				}
				else{
					User.find({name: req.body.name}, function(err1, result1){
						if (err1){
							console.log("error");
						}
						else{
							res.json(result1);
						}
					})
				}
			})
		},
		getname: function(req,res){
			User.find({_id: req.params.id}, function(err, result){
				if (err){
					console.log("error");
				}
				else{
					res.json(result);
				}
			})
		},

		addquestion: function(req,res){
			var insert = new Question ({question: req.body.question, answer: req.body.answer, fake1: req.body.fake1, fake2: req.body.fake2});
			insert.save(function(err,result){
				if (err){
					console.log("VALIDATED Question");
				}
				else{
					res.json(result);
				}
			})
		},
		getquestions: function(req,res){
			Question.find({}, function(err,result){
				if (err){
					console.log("error finding");
				}
				else{
					res.json(result);
				}
			})

		},
		getscores: function(req,res){
			Score.find({}, function(err, result){
				if (err){
					console.log('error')
				}
				else{
					res.json(result);
				}
			})
		}











	}
})();