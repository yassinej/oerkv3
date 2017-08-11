import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Landing from './Landing';
import Header from './Header';

// import * as actions from '../actions';

class App extends Component {
	componentDidMount() {}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Route exact path="/" component={Landing} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
