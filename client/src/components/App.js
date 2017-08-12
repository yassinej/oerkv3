import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './Landing';
import Header from './Header';
import LoginPage from './Login/LoginPage';
import LoginForm from './Login/LoginForm';
import SignupForm from './Login/SignupForm';
import ItemsList from './Items/ItemsList';
import About from './About';
import * as actions from '../actions';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/loginForm" component={LoginForm} />
						<Route exact path="/signupForm" component={SignupForm} />
						<Route exact path="/items" component={ItemsList} />
						<Route exact path="/packages" component={ItemsList} />
						<Route exact path="/about" component={About} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
