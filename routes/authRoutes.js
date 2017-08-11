const passport = require('passport');
module.exports = (app, passport) => {
	// Local ---------------------------------
	// process the login form
	app.post(
		'/auth/login',
		passport.authenticate('local-login', {
			successRedirect: '/profile', // redirect to the secure profile section
			failureRedirect: '/auth/login' // redirect back to the signup page if there is an error
		}),
		(req, res) => {
			console.log('login body', req.body);
		}
	);

	// process the signup form
	app.post(
		'/auth/signup',
		passport.authenticate('local-signup', {
			successRedirect: '/profile', // redirect to the secure profile section
			failureRedirect: '/auth/signup' // redirect back to the signup page if there is an error
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
		passport.authenticate('google', {
			successRedirect: '/profile',
			failureRedirect: '/'
		})
	);

	//Api ----------------------------------------------

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.status(200).send('Logged out');
	});

	app.get('/api/profile', isLoggedIn, (req, res) => {
		console.log('Logged in user is', req.user);
		res.status(200).send(req.user);
	});

	// route middleware to ensure user is logged in
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();

		res.redirect('/');
	}
};
