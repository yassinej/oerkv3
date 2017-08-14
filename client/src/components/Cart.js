import React, { Component } from 'react';
import { Header, Step, Icon, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Cart extends Component {
	// state = { visible: false };
	//
	// toggleVisibility = () => this.setState({ visible: !this.state.visible });

	render() {
		// const { visible } = this.state;
		return (
			<div>
				<Segment>
					<Header size="huge" textAlign="center">
						Discover our Items
					</Header>
				</Segment>
				<Step.Group>
					<Step active>
						<Icon name="cart" />
						<Step.Content
							title="Check your cart"
							description="Confirm your cart content"
						/>
					</Step>
					<Step disabled>
						<Icon name="user" />
						<Step.Content
							title="User Infos"
							description="Verify your account details"
						/>
					</Step>

					<Step disabled>
						<Icon name="icon" />
						<Step.Content
							title="Confirm Order"
							description="Verify your account details"
						/>
					</Step>
				</Step.Group>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { cart: state.cart };
}
export default connect(mapStateToProps)(Cart);
