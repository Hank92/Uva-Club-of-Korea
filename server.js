var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');


var app = express();

var uristring = process.env.MONGOLAB_URI || 
'mongodb://heroku_app28200509:45egdfekhi45stqko0mu64rqr5@ds031477.mongolab.com:31477/heroku_app28200509';
mongoose.connect(configDB.url); // connect to our database
// 'mongodb://localhost/myMongodbDatabase';

require('./routes')(app, passport);
require('./config/passport')(passport);



app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms
	app.use(express.methodOverride()); // put & delete

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'HankHankhanktheBestHank' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});



mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log("Error" + err);
	} else {
		console.log("Successfully connected to mongodb at the url: " + uristring);
		var port = Number(process.env.PORT || 8000);
		app.listen(port);
		console.log("App listening on port: " + port);
	}
});

