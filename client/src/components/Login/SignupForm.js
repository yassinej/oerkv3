import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
import FormField from '../Form/FormField';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import fields from '../Form/fields';
import { Button, Form, Grid, Header, Icon, Divider } from 'semantic-ui-react';

class SignupForm extends Component {
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
		const { formValues, submitSignup, history } = this.props;
		return (
			<Grid>
				<Grid.Row centered style={{ paddingBottom: '0' }}>
					<Grid.Column width={3}>
						<Header as="h1" icon>
							<Icon name="signup" />Signup
							<Header.Subheader>Enter your account details.</Header.Subheader>
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row centered style={{ paddingTop: '0' }}>
					<Grid.Column width={6}>
						<Divider />
						<Form>
							{this.renderFields()}
							<Button onClick={() => submitSignup(formValues, history)}>
								Submit
							</Button>
						</Form>
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
	//console.log('_SignupForm_mapSTate_State', state);
	return {
		formValues: state.form.signupForm.values
	};
}
export default reduxForm({ validate, form: 'signupForm' })(
	connect(mapStateToProps, actions)(SignupForm)
);
