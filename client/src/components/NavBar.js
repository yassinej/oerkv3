import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Button,
	Container,
	Menu,
	Segment,
	Icon,
	Dropdown
} from 'semantic-ui-react';

class NavBar extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'still deciding';
			case false:
				return [
					<Menu.Item key="1" className="item" as={Link} to="/login">
						Login
					</Menu.Item>,
					<Menu.Item key="2" as="a" href="/auth/google">
						Login with Google
					</Menu.Item>
				];
			default:
				const text = `Logged in as ${this.props.auth.google.name}`;
				return [
					<Dropdown pointing text={text} className="link item">
						<Dropdown.Menu>
							<Dropdown.Item as={Link} to="/profile">
								My Profile
							</Dropdown.Item>
							<Dropdown.Item as="a" href="/api/logout">
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>,
					<Menu.Item key="2" className="item">
						<Icon name="cart" />
					</Menu.Item>
				];
		}
	}
	render() {
		return (
			<Menu pointing secondary size="large">
				<Container>
					<Menu.Item as={Link} to="/" active>
						OERK
					</Menu.Item>
					<Menu.Item as={Link} to="/items">
						Items
					</Menu.Item>
					<Menu.Item as={Link} to="/packages">
						Packages
					</Menu.Item>
					<Menu.Item as={Link} to="/about">
						About
					</Menu.Item>
					<Menu.Menu position="right">
						{this.renderContent()}
					</Menu.Menu>
				</Container>
			</Menu>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(NavBar);
