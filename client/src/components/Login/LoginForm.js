import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
import FormField from '../Form/FormField';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import fields from '../Form/fields';
import {
	Button,
	Form,
	Grid,
	Header,
	Icon,
	Divider,
	Message
} from 'semantic-ui-react';

class LoginForm extends Component {
	renderFields() {
		return _.map(fields, field => {
			return (
				<Field
					key={field.name}
					label={field.label}
					name={field.name}
					component={FormField}
					type={field.type}
				/>
			);
		});
	}
	render() {
		const { formValues, submitLogin, history } = this.props;
		return (
			<Grid>
				<Grid.Row centered style={{ paddingBottom: '0' }}>
					<Grid.Column width={3}>
						<Header as="h1" icon>
							<Icon name="signup" />Login
							<Header.Subheader>Enter your account details.</Header.Subheader>
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row centered style={{ paddingTop: '0' }}>
					<Grid.Column width={6}>
						<Divider />
						<Form>
							{this.renderFields()}
							<Button onClick={() => submitLogin(formValues, history)}>
								Submit
							</Button>
						</Form>
						<Message>
							New to us? <Link to="/signup">Sign Up</Link>
						</Message>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
function validate(values) {
	const errors = {};

	_.each(fields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a valid value';
		}
	});

	return errors;
}
function mapStateToProps(state) {
	//console.log('_LoginForm_state: ', state);
	return {
		formValues: state.form.loginForm.values
	};
}
export default reduxForm({ validate, form: 'loginForm' })(
	connect(mapStateToProps, actions)(LoginForm)
);
