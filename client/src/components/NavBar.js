import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

class NavBar extends Component {
	renderRightMenu() {
		switch (this.props.auth) {
			case null:
				return '';
			case false:
				return (
					<Menu.Menu position="right">
						<Menu.Item key="1" className="item" as={NavLink} to="/login">
							Login
						</Menu.Item>
						<Menu.Item key="2" as="a" href="/auth/google">
							Login with Google
						</Menu.Item>
					</Menu.Menu>
				);
			default:
				const text = `Logged in as ${this.props.auth.google.name}`;
				return (
					<Menu.Menu position="right">
						<Dropdown pointing text={text} className="link item">
							<Dropdown.Menu>
								<Dropdown.Item as={Link} to="/profile">
									My Profile
								</Dropdown.Item>
								<Dropdown.Item as="a" href="/api/logout">
									Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Menu.Item
							key="2"
							className="item"
							style={{ paddingLeft: '0', paddingRight: '0' }}
						>
							<Button inverted as={Link} to="/cart">
								<Icon color="black" size="large" name="cart" />
							</Button>
						</Menu.Item>
					</Menu.Menu>
				);
		}
	}
	renderAdmin() {
		switch (this.props.auth) {
			case null:
				return '';
			case false:
				return '';
			default:
				if (this.props.auth.isAdmin) {
					return (
						<Dropdown pointing text="Admin" className="link item">
							<Dropdown.Menu>
								<Dropdown.Item as={Link} to="/admin/items">
									Items
								</Dropdown.Item>
								<Dropdown.Item as={Link} to="/admin/users">
									Users
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					);
				}
		}
	}

	render() {
		return (
			<Menu pointing secondary size="large">
				<Container>
					<Menu.Item as={NavLink} exact to="/">
						OERK
					</Menu.Item>
					<Menu.Item as={NavLink} exact to="/items">
						Items
					</Menu.Item>
					<Menu.Item as={NavLink} exact to="/packages">
						Packages
					</Menu.Item>
					<Menu.Item as={NavLink} exact to="/about">
						About
					</Menu.Item>
					{this.renderAdmin()}
					{this.renderRightMenu()}
				</Container>
			</Menu>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(NavBar);
