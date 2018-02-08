var Question = require('../models/models').Question;

module.exports = function(app) {
/* GET home page. */
	app.get('/', function(req, res, next) {
		res.render('index.ejs', {questions: {}})
	});


};
	  // Question.find({}, function(err, questions){
	  // 	if(err){
	  // 		  res.render('index.ejs', { message: req.flash(err) });
	  // 	}else{
	  // 		if(questions){
	  // 			res.render('index.ejs', {questions: questions})
	  // 		}else{
	  // 			res.render('index.ejs', {questions: {}})
	  // 		}
	  		
	  // 	}
	  // })