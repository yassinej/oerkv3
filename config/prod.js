module.exports = {
	googleAuth: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_SECRET_KEY,
		callbackURL: process.env.GOOGLE_CALLBACK_URL
	},

	mongoURI: process.env.MONGO_URL,
	cookieKey: process.env.COOKIE_KEY
};
