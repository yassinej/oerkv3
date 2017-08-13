import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Grid, Segment } from 'semantic-ui-react';
import * as actions from '../../actions';
import ItemCard from './ItemCard';
class ItemsList extends Component {
	componentWillMount() {
		//console.log('_ItemsList_fetching items');
		this.props.fetchItems();
	}
	renderItems() {
		//console.log('_ItemsList_renderItems', this.props.items);
		if (!this.props.items) {
			return <Header as="h1">Empty Items DB...</Header>;
		}
		if (!this.props.items.length) {
			return <Header as="h1">Loading Items...</Header>;
		}

		return this.props.items.map(item => {
			//console.log('_ItemsList_renderItems Item is:', item.name);
			return (
				<Grid.Column key={item.name}>
					<ItemCard item={item} auth={this.props.auth} />
				</Grid.Column>
			);
		});
	}
	render() {
		return (
			<div>
				<Segment>
					<Header size="huge" textAlign="center">
						Discover our Items
					</Header>
				</Segment>

				<Grid stackable columns={4}>
					{this.renderItems()}
				</Grid>
			</div>
		);
	}
}
function mapStateToProps(state) {
	//console.log('_ItemsList_mapState state is:', state);
	return {
		items: state.items,
		auth: state.auth
	};
}
export default connect(mapStateToProps, actions)(ItemsList);
