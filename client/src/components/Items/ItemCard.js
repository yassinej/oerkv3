import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import ItemShow from './ItemShow';
const renderAddCart = auth => {
	if (auth === null || !auth) {
		return '';
	} else {
		return (
			<Button positive size="medium" floated="left">
				<Icon size="large" name="add to cart" />
			</Button>
		);
	}
};

const ItemCard = ({ item, auth }) => {
	return (
		<Card>
			<Image src={item.image} />
			<Card.Content>
				<Card.Header>
					{item.name}
				</Card.Header>
				<Card.Meta>
					<span className="price">
						{item.price}€/day
					</span>
					<span className="category">
						{item.category}
					</span>
				</Card.Meta>
				<Card.Description>
					{item.description}
				</Card.Description>
			</Card.Content>

			<Card.Content extra>
				{renderAddCart(auth)}
				<ItemShow item={item} />
			</Card.Content>
		</Card>
	);
};

export default ItemCard;
