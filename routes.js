module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.UvaHome);
	app.get('/UvaEvents', handlers.UvaEvents);

	app.get('/pinterless', handlers.pinterless);

	// Posts
	app.post('/pinterless', handlers.createPin);
}