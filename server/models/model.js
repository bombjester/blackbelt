var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {type: String, unique:true},
});
var ScoreSchema = new mongoose.Schema({
	name: String,
	score: String,
	percentage: String,
})
var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 15},
	answer: {type: String,required: true},
	fake1: {type:String , required: true},
	fake2: {type: String, required: true}
})

mongoose.model("users", UserSchema);
mongoose.model("questions" , QuestionSchema);
mongoose.model("scores", ScoreSchema);