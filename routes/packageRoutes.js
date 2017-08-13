const mongoose = require('mongoose');
const Package = mongoose.model('Package');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
	app.get('/api/packages', async (req, res) => {
		const packages = await Package.find({});
		//console.log('_packageRoutes_Found packages are:', packages);
		res.send(packages);
	});
	app.post('/api/packages', requireLogin, async (req, res) => {
		//console.log('_packageRoutes_body is:', req.body);
		const { name, price, description, image, category } = req.body;
		const package = new Package({
			name,
			price,
			description,
			image,
			category
		});
		try {
			await package.save();
			res.send(package);
		} catch (e) {
			res.status(422).send(e);
		}
	});
};
