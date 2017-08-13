import React from 'react';
import { Icon, Header, Grid } from 'semantic-ui-react';
const Profile = () => {
	return (
		<Grid>
			<Grid.Row centered style={{ paddingBottom: '0' }}>
				<Grid.Column width={3}>
					<Header as="h1" icon>
						<Icon name="user circle outline" />Profile
						<Header.Subheader>Account details.</Header.Subheader>
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Profile;
