const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport')(passport);

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(
	expressSession({
		secret: keys.cookieKey, // session secret
		resave: true,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app, passport);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Hello Yassine');
});

app.listen(PORT);
