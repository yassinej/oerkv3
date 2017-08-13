const passport = require('passport');

module.exports = (app, passport) => {
	// Local ---------------------------------
	// process the login form
	app.post(
		'/auth/login',
		passport.authenticate('local-login', (req, res) => {
			//console.log('_authRoutes_req is:', req);
			res.redirect('/items');
		})
	);

	// process the signup form
	app.post(
		'/auth/signup',
		passport.authenticate('local-signup', (req, res) => {
			res.redirect('/items');
		})
	);

	// google ---------------------------------
	// send to google to do the authentication
	app.get(
		'/auth/google',
		passport.authenticate('google', { scope: ['profile', 'email'] })
	);

	// the callback after google has authenticated the user
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/items');
		}
	);

	//Api ----------------------------------------------

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		//console.log('Logged in user is', req.user);
		res.status(200).send(req.user);
	});
};
