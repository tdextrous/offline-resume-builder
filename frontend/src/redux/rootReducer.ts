import { combineReducers } from 'redux';

// Import other reducers
import entityReducer from './entityReducer';

const rootReducer = combineReducers({
  entity: entityReducer
});

export default rootReducer;
