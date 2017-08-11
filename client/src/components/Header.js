import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<div>
				<nav className="black teal-text">
					<div className="nav-wrapper" style={{ margin: '0 10px' }}>
						<Link to="/" className="brand-logo teal-text">
							OERK
						</Link>
						<ul className="right hide-on-med-and-down">
							<li style={{ margin: '0 5px' }}>LogIn</li>
							<li style={{ margin: '0 5px' }}>SignUp</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
