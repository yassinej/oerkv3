import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Header,
	Card,
	Icon,
	Image,
	Grid,
	Button,
	Segment
} from 'semantic-ui-react';
import * as actions from '../../actions';

class PackagesList extends Component {
	componentWillMount() {
		//console.log('_PackagesList_fetching packages');
		this.props.fetchPackages();
	}
	renderPackages() {
		//console.log('_PackagesList_renderPackages', this.props);
		if (!this.props.packages) {
			return <Header as="h1">Empty Packages DB...</Header>;
		}
		if (!this.props.packages.length) {
			return <Header as="h1">Loading Packages...</Header>;
		}

		return this.props.packages.map(pack => {
			//console.log('_PackagesList_renderPackages Item is:', pack.name);
			return (
				<Grid.Column key={pack.name}>
					<Card>
						<Image src={pack.image} />
						<Card.Content>
							<Card.Header>
								{pack.name}
							</Card.Header>
							<Card.Meta>
								<span className="category">
									{pack.category}
								</span>
							</Card.Meta>
							<Card.Description>
								{pack.description}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Button primary floated="right">
								More info
								<Icon name="right chevron" />
							</Button>
						</Card.Content>
					</Card>
				</Grid.Column>
			);
		});
	}
	render() {
		return (
			<div>
				<Segment color="black">
					<Header size="huge" textAlign="center">
						Discover our Packages
					</Header>
				</Segment>

				<Grid stackable columns={4}>
					{this.renderPackages()}
				</Grid>
			</div>
		);
	}
}
function mapStateToProps(state) {
	console.log('_PackagesList_mapState state is:', state);
	return { packages: state.packages };
}
export default connect(mapStateToProps, actions)(PackagesList);
