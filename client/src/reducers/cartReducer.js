import { ADD_ITEM_TO_CART } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case ADD_ITEM_TO_CART:
			return action.payload || false;
		default:
			return state;
	}
}
