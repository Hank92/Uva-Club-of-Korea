var mongoose = require('mongoose'),
Pin = mongoose.model('Pin');

exports.UvaHome = function(req, res){
	res.render('UvaHome', function(err,html){
		res.send(html);
	})
}

exports.UvaEvents = function(req, res){
	res.render('UvaEvents', function(err,html){
		res.send(html);
	})
}

exports.UvaMembers = function(req, res){
	res.render('UvaMembers', function(err,html){
		res.send(html);
	})
}

exports.UvaExample = function(req, res){
	res.render('UvaExample', function(err,html){
		res.send(html);
	})
}

exports.UvaEv = function(req, res){
	res.render('UvaEv', function(err,html){
		res.send(html);
	})
}

exports.About = function(req, res){
	res.render('About', function(err,html){
		res.send(html);
	})
}

exports.Uvaquestions = function(req, res){
	res.render('Uvaquestions', function(err,html){
		res.send(html);
	})
}

exports.UvaContact = function(req, res){
	res.render('UvaContact', function(err,html){
		res.send(html);
	})
}

exports.pinterless = function(req, res) {
	console.log("Query: " + req.query);
	if (req.query.search) {
		Pin.findByTitle(req.query.search, function(err, all_pins) {
			console.log("Pins: " + JSON.stringify(all_pins) );
			res.render('pinterless', { pins: all_pins }, function(err, html) {
				res.send(html);
			})
			// res.send(JSON.stringify(result))
		});
	} else {
		Pin.find({}, function(err, all_pins) {
			console.log("Pins: " + JSON.stringify(all_pins) );
			res.render('pinterless', { pins: all_pins }, function(err, html) {
				res.send(html);
			})
			// res.send(JSON.stringify(result))
		});
	}
}

exports.createPin = function(req, res) {
	var newPin = new Pin({ 
								title: req.body.title, 
								description: req.body.description, 
								image_url: req.body.image_url 
						});
	newPin.save(function(err) {
		if (err) {
			console.log("Error saving pin");
		} else {
			res.redirect('/pinterless');
		};
	});	

}
