import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitCredentials = (values, history) => async dispatch => {
	console.log('_action_index_Values to post are : ', values);
	const res = await axios.post('/auth/login', values);
	console.log('_action_index_Axios post sent');
	dispatch({ type: FETCH_USER, payload: res.data });
	history.push('/items');
};
