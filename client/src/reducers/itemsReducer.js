import { CREATE_ITEM, FETCH_ITEMS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case CREATE_ITEM:
			return action.payload || false;
		case FETCH_ITEMS:
			return action.payload || false;
		default:
			return state;
	}
}
