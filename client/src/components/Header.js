import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'still deciding';
			case false:
				return [
					<li key="1">
						<Link to="/Login">Login</Link>
					</li>,
					<li key="2">
						<Link to="/Signup">Signup</Link>
					</li>
				];
			default:
				return [
					<li key="1">
						Logged in as {this.props.auth.google.name}
					</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}
	render() {
		return (
			<div>
				<nav className="black teal-text">
					<div className="nav-wrapper" style={{ margin: '0 10px' }}>
						<Link to="/" className="brand-logo teal-text">
							OERK
						</Link>
						<ul className="right">
							{this.renderContent()}
						</ul>
						<ul className="right">
							<li key="1">
								<Link to="/items">Items</Link>
							</li>
							<li key="2">
								<Link to="/packages">Packages</Link>
							</li>
							<li key="3">
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header);
