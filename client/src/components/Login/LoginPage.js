import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends Component {
	render() {
		return (
			<div className="center">
				<h2 className="header">Login Page</h2>
				<div className="row">
					<Link to="/LoginForm" className="btn teal flat">
						Login with email
					</Link>
				</div>
				<div className="row">
					<Link to="/SignupForm" className="btn teal flat">
						Signup with email
					</Link>
				</div>
				<div className="row">
					<a className="btn red flat white-text" href="/auth/google">
						Login with Google
					</a>
				</div>
			</div>
		);
	}
}

export default connect()(LoginPage);
