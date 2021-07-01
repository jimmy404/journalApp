import { createStore, combineReducers } from 'redux';

import { authReducer } from '../reducers/authReducer';

const reducer = combineReducers({
  auth: authReducer
});

export const store = createStore( reducer );
