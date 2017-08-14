import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import ItemShow from './ItemShow';
import { connect } from 'react-redux';

const renderAddCart = (auth, addToCart) => {
	if (auth === null || !auth) {
		return '';
	} else {
		return (
			<Button
				positive
				size="medium"
				floated="left"
				style={{ paddingRight: '0.5em ', paddingLeft: '0.5em' }}
				onClick={addToCart}
			>
				<Icon name="add"> </Icon>
				Add to Cart
			</Button>
		);
	}
};

const ItemCard = ({ item, auth, addToCart }) => {
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
				{renderAddCart(auth, addToCart)}
				<ItemShow item={item} />
			</Card.Content>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		items: state.items,
		auth: state.auth
	};
}
export default connect(mapStateToProps)(ItemCard);
