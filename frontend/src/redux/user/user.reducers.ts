/**
 * Redux reducers for user
 */
import { combineReducers } from 'redux';
import * as types from './user.types';
import * as actionTypes from './user.actionTypes';
import { User } from '../../entity/index';


const userAddEntry = (
  state: types.UserByIdState,
  action: types.AddUserAction | types.UpdateUserAction
): types.UserByIdState => {
  const newItem: Readonly<User> = action.payload;
  const newState = {
    ...state,
    [newItem.id]: newItem
  };
  return newState;
}

const userRemoveEntry = (
  state: types.UserByIdState,
  action: types.RemoveUserAction
): types.UserByIdState => {
  const id: string = action.payload;
  const { [id]: _deletedContent, ...newState } = state;
  return newState;
}

const byIdInitialState: types.UserByIdState = {
  '1': {
    id: '1',
    firstName: 'New',
    lastName: 'User'
  }
};

const userByIdReducer = (
  state = byIdInitialState,
  action: types.UserActionTypes
): types.UserByIdState => {
  switch (action.type) {
    case actionTypes.USER_ADD:
    case actionTypes.USER_UPDATE:
      return userAddEntry(state, action);
    case actionTypes.USER_REMOVE:
      return userRemoveEntry(state, action);
    default:
      return state;
  }
};


const userAddId = (
  state: types.UserAllIdsState,
  action: types.AddUserAction
): types.UserAllIdsState => {
  const id = action.payload.id;
  return state.concat(id);
}

const userRemoveId = (
  state: types.UserAllIdsState,
  action: types.RemoveUserAction
): types.UserAllIdsState => {
  const id = action.payload;
  return state.filter((currId: string) => currId !== id);
}

const allIdsInitialState: types.UserAllIdsState = ['1'];

const userAllIdsReducer = (
  state = allIdsInitialState,
  action: types.UserActionTypes
): types.UserAllIdsState => {
  switch (action.type) {
    case actionTypes.USER_ADD:
      return userAddId(state, action);
    case actionTypes.USER_UPDATE:
      return state;
    case actionTypes.USER_REMOVE:
      return userRemoveId(state, action);
    default:
      return state;
  }
};


const userReducer = combineReducers({
  byId: userByIdReducer,
  allIds: userAllIdsReducer,
});

export default userReducer;
