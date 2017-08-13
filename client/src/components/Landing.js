import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Landing = () => {
	return (
		<div
			style={{
				textAlign: 'center',

				backgroundImage: "url('http://i.imgur.com/K3mPv14.jpg')",
				backgroundSize: 'cover',
				minHeight: '600px',
				padding: '1em 0em'
			}}
		>
			<Container text>
				<Header
					as="h1"
					content="OERK"
					inverted
					style={{
						fontColor: 'teal',
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
				<Button as={Link} to="/items" positive size="huge">
					Get Started
					<Icon name="right arrow" />
				</Button>
			</Container>
		</div>
	);
};

export default Landing;
