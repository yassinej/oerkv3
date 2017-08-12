import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'still deciding';
			case false:
				return (
					<Menu.Item className="item">
						<Button positive>
							<Link to="/login">Login</Link>
						</Button>
					</Menu.Item>
				);
			default:
				return [
					<Menu.Item key="1" className="item">
						Logged in as {this.props.auth.google.name}
					</Menu.Item>,
					<Menu.Item key="2">
						<Button negative>
							<a href="/api/logout">Logout</a>
						</Button>
					</Menu.Item>
				];
		}
	}
	render() {
		return (
			<Segment inverted style={{ marginBottom: '0' }}>
				<Menu inverted pointing secondary size="large">
					<Container>
						<Menu.Item active>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/items">Items</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/packages">Packages</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/about">About</Link>
						</Menu.Item>
						<Menu.Menu position="right">
							{this.renderContent()}
						</Menu.Menu>
					</Container>
				</Menu>
			</Segment>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(NavBar);
