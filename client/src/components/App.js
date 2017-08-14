import React, { Component } from 'react';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Landing from './Landing';
import NavBar from './NavBar';
import Cart from './Cart';
import LoginForm from './Login/LoginForm';
import SignupForm from './Login/SignupForm';
import Profile from './Login/Profile';
import ItemsList from './Items/ItemsList';
import PackagesList from './Packages/PackagesList';
import About from './About';
import * as actions from '../actions';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		const NavBarWithRouter = withRouter(NavBar);
		return (
			<div>
				<BrowserRouter>
					<Container>
						<NavBarWithRouter />
						<Route exact path="/" component={Landing} />
						<Route exact path="/login" component={LoginForm} />
						<Route exact path="/signup" component={SignupForm} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/items" component={ItemsList} />
						<Route exact path="/packages" component={PackagesList} />
						<Route exact path="/about" component={About} />
					</Container>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
