module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.UvaHome);
	app.get('/UvaEvents', handlers.UvaEvents);
	app.get('/UvaExample', handlers.UvaExample);
	app.get('/UvaQuestions', handlers.UvaMembers);
	app.get('/UvaContact', handlers.UvaContact);
	app.get('/UvaMembers', handlers.UvaMembers);
	app.get('/About', handlers.About);

	app.get('/pinterless', handlers.pinterless);

	// Posts
	app.post('/pinterless', handlers.createPin);
}