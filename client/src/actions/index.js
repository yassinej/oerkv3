import axios from 'axios';
import {
	FETCH_USER,
	CREATE_ITEM,
	FETCH_ITEMS,
	FETCH_PACKAGES,
	CREATE_PACKAGE,
	ADD_ITEM_TO_CART
} from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitLogin = (values, history) => async dispatch => {
	//console.log('_action_submitLogin_Values to post are : ', values);
	console.log('_action_submitLogin_History is : ', history);
	const res = await axios.post('/auth/login', values);
	//console.log('_action_index_Axios post sent');
	dispatch({ type: FETCH_USER, payload: res.data });
	history.push('/items');
};
export const submitSignup = (values, history) => async dispatch => {
	//console.log('_action_submitLogin_Values to post are : ', values);
	const res = await axios.post('/auth/signup', values);
	//console.log('_action_index_Axios post sent');
	dispatch({ type: FETCH_USER, payload: res.data });
	history.push('/items');
};
export const fetchItems = () => async dispatch => {
	//console.log('_action_fetchItems_Getting Items');
	const res = await axios.get('/api/items');
	//console.log('_action_fetchItems_Got Items', res.data);
	dispatch({ type: FETCH_ITEMS, payload: res.data });
};
export const submitItem = (values, history) => async dispatch => {
	const res = await axios.post('/api/items', values);
	dispatch({ type: CREATE_ITEM, payload: res.data });
	history.push('/packages');
};
export const fetchPackages = () => async dispatch => {
	//console.log('_action_fetchPackages_Getting Packages');
	const res = await axios.get('/api/packages');
	//console.log('_action_fetchPackages_Got Packages', res.data);
	dispatch({ type: FETCH_PACKAGES, payload: res.data });
};
export const submitPackage = (values, history) => async dispatch => {
	const res = await axios.post('/api/packages', values);
	dispatch({ type: CREATE_PACKAGE, payload: res.data });
	history.push('/packages');
};
export const addToCart = values => async dispatch => {
	console.log('_action_addToCart_Values to post are : ', values);
	const res = await axios.post('/api/addtocart', values);
	dispatch({ type: ADD_ITEM_TO_CART, payload: res.data });
};
