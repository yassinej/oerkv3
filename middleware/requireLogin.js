module.exports = (req, res, next) => {
	if (!req.user) {
		//console.log('_requireLogin_You are notlogged in');
		res.status(401).error('You must Log in!');
	}
	//console.log('_requireLogin_You are logged in');
	//console.log('_requireLogin_Session Content:', req.session);
	next();
};
