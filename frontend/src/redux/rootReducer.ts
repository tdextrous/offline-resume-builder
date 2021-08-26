import { combineReducers } from 'redux';

// Import other reducers
import persistedReducer from './persistedReducer';

const rootReducer = combineReducers({
  entity: persistedReducer
});

export default rootReducer;
