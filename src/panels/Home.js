import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, List, Cell, HeaderContext,
	Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import './Persik.css';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Users from '@vkontakte/icons/dist/24/users';

const Home = ({ id, go, fetchedUser, player }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</ListItem>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="audio">
					Show me the Scaner, please
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="audio">
					Show me the Audio, please
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="maps">
					Show me the Maps, please
				</Button>
			</Div>
		</Group>
		{player}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
