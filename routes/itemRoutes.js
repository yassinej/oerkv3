const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
	app.get('/api/items', async (req, res) => {
		const items = await Item.find({});
		//console.log('_itemRoutes_Found items are:', items);
		res.status(200).send(items);
	});
	app.post('/api/items', requireLogin, async (req, res) => {
		//console.log('_itemRoutes_body is:', req.body);
		const {
			name,
			price,
			category,
			description,
			image,
			detailedDescription,
			additionalInfo
		} = req.body;
		const item = new Item({
			name,
			price,
			category,
			description,
			image,
			detailedDescription,
			additionalInfo
		});
		try {
			await item.save();
			res.send(item);
		} catch (e) {
			res.status(422).send(e);
		}
	});
	app.post('/api/addtocart', requireLogin, async (req, res) => {
		//console.log('_itemRoutes_body is:', req.body);
		console.log('_itemRoutes_body is:', req.body.id);

		// try {
		// 	await user.save();
		// 	res.status(200).send(cart);
		// } catch (e) {
		// 	res.status(422).send(e);
		// }
	});
};
