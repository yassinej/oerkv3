import { CREATE_PACKAGE, FETCH_PACKAGES } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case CREATE_PACKAGE:
			return action.payload || false;
		case FETCH_PACKAGES:
			return action.payload || false;
		default:
			return state;
	}
}
