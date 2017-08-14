import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemsReducer from './itemsReducer';
import cartReducer from './cartReducer';
import packagesReducer from './packagesReducer';
import { reducer as formReducer } from 'redux-form';
window.axios = require('axios');
export default combineReducers({
	auth: authReducer,
	form: formReducer,
	items: itemsReducer,
	packages: packagesReducer,
	cart: cartReducer
});
