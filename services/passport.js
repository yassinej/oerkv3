const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
const User = mongoose.model('users');

module.exports = function(passport) {
	// =========================================================================
	// passport session setup ==================================================
	// =========================================================================
	// required for persistent login sessions
	// passport needs ability to serialize and unserialize users out of session

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		//console.log('_passport_Serialize');
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		//console.log('_passport_DeSerialize');
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	// =========================================================================
	// LOCAL LOGIN =============================================================
	// =========================================================================
	passport.use(
		'local-login',
		new LocalStrategy(
			{
				// by default, local strategy uses username and password, we will override with email
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
			},
			function(req, email, password, done) {
				if (email) email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

				// asynchronous
				process.nextTick(function() {
					//console.log('_passport_Local-login');
					User.findOne({ 'local.email': email }, function(err, user) {
						// if there are any errors, return the error
						if (err) {
							//console.log('error found', err);
							return done(err);
						}

						// if no user is found, return the message
						if (!user) {
							//console.log('No user found.');
							return done(null, false);
						}

						if (!user.validPassword(password, user)) {
							//console.log('loginMessage', 'Oops! Wrong password.');
							return done(null, false);
						} else {
							// all is well, return user
							//console.log('all good', user);
							return done(null, user);
						}
					});
				});
			}
		)
	);

	// =========================================================================
	// LOCAL SIGNUP ============================================================
	// =========================================================================
	passport.use(
		'local-signup',
		new LocalStrategy(
			{
				// by default, local strategy uses username and password, we will override with email
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
			},
			function(req, email, password, done) {
				//console.log('_passport_Local-signup');
				if (email) email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

				// asynchronous
				process.nextTick(() => {
					// if the user is not already logged in:
					if (!req.user) {
						User.findOne({ 'local.email': email }, (err, user) => {
							// if there are any errors, return the error
							if (err) return done(err);

							// check to see if theres already a user with that email
							if (user) {
								return done(null, false);
							} else {
								// create the user
								const newUser = new User();

								newUser.local.email = email;
								newUser.local.password = newUser.generateHash(password);

								newUser.save(err => {
									if (err) return done(err);

									return done(null, newUser);
								});
							}
						});
						// if the user is logged in but has no local account...
					} else if (!req.user.local.email) {
						// ...presumably they're trying to connect a local account
						// BUT let's check if the email used to connect a local account is being used by another user
						User.findOne({ 'local.email': email }, (err, user) => {
							if (err) return done(err);

							if (user) {
								return done(null, false);
								// Using 'loginMessage instead of signupMessage because it's used by /connect/local'
							} else {
								const user = req.user;
								user.local.email = email;
								user.local.password = user.generateHash(password);
								user.save(err => {
									if (err) return done(err);

									return done(null, user);
								});
							}
						});
					} else {
						// user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
						return done(null, req.user);
					}
				});
			}
		)
	);

	// =========================================================================
	// GOOGLE ==================================================================
	// =========================================================================
	passport.use(
		new GoogleStrategy(
			{
				clientID: keys.googleAuth.clientID,
				clientSecret: keys.googleAuth.clientSecret,
				callbackURL: keys.googleAuth.callbackURL,
				passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
			},
			function(req, token, refreshToken, profile, done) {
				// asynchronous
				process.nextTick(function() {
					// check if the user is already logged in
					if (!req.user) {
						User.findOne({ 'google.id': profile.id }, function(err, user) {
							if (err) return done(err);

							if (user) {
								// if there is a user id already but no token (user was linked at one point and then removed)
								if (!user.google.token) {
									user.google.token = token;
									user.google.name = profile.displayName;
									user.google.email = (profile.emails[0].value || '')
										.toLowerCase(); // pull the first email

									user.save(function(err) {
										if (err) return done(err);

										return done(null, user);
									});
								}

								return done(null, user);
							} else {
								const newUser = new User();

								newUser.google.id = profile.id;
								newUser.google.token = token;
								newUser.google.name = profile.displayName;
								newUser.google.email = (profile.emails[0].value || '')
									.toLowerCase(); // pull the first email

								newUser.save(function(err) {
									if (err) return done(err);

									return done(null, newUser);
								});
							}
						});
					} else {
						// user already exists and is logged in, we have to link accounts
						const user = req.user; // pull the user out of the session

						user.google.id = profile.id;
						user.google.token = token;
						user.google.name = profile.displayName;
						user.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email

						user.save(function(err) {
							if (err) return done(err);

							return done(null, user);
						});
					}
				});
			}
		)
	);
};
