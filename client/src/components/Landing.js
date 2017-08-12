import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const Landing = () => {
	return (
		<Segment
			inverted
			textAlign="center"
			style={{ minHeight: '600px', padding: '1em 0em' }}
			vertical
		>
			<Container text>
				<Header
					as="h1"
					content="OERK"
					inverted
					style={{
						fontSize: '4em',
						fontWeight: 'normal',
						marginBottom: 0,
						marginTop: '3em'
					}}
				/>
				<Header
					as="h2"
					content="Let us pack your gear."
					inverted
					style={{
						fontSize: '1.7em',
						fontWeight: 'normal'
					}}
				/>
				<Button primary size="huge">
					Get Started
					<Icon name="right arrow" />
				</Button>
			</Container>
		</Segment>
	);
};

export default Landing;
