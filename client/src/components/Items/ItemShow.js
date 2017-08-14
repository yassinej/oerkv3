import React from 'react';
import { Modal, Header, Button, Tab, Image } from 'semantic-ui-react';

const ItemShow = ({ item }) => {
	const panes = [
		{
			menuItem: 'Technical Infos',
			render: () =>
				<Tab.Pane attached={false}>
					{renderAddInfo(item)}
				</Tab.Pane>
		},
		{
			menuItem: 'User Reviews',
			render: () =>
				<Tab.Pane attached={false}>
					{renderComments(item)}
				</Tab.Pane>
		},
		{
			menuItem: 'Tab 3',
			render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
		}
	];

	const renderAddInfo = item => {
		return <did>additionalInfo</did>;
	};
	const renderComments = item => {
		return <did>Comments</did>;
	};
	return (
		<Modal
			trigger={
				<Button size="medium" floated="right">
					More info
				</Button>
			}
		>
			<Modal.Header>
				{item.name}
			</Modal.Header>
			<Modal.Content image scrolling>
				<Image wrapped size="medium" src={item.image} />
				<Modal.Description>
					<Header>
						Rates: {item.price}€/Day
					</Header>
					<Header>Description:</Header>
					<p>
						{item.description}
					</p>
					<p>
						{item.detailedDescription}
					</p>
					<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};
export default ItemShow;
