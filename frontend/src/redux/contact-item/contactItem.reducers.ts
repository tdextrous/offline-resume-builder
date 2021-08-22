/**
 * Redux reducers for experience content
 */
import { combineReducers } from 'redux';
import * as types from './contactItem.types';
import * as actionTypes from './contactItem.actionTypes';
import { ContactItem } from '../../entity/index';


const contactItemAddEntry = (
  state: types.ContactItemByIdState,
  action: types.AddContactItemAction | types.UpdateContactItemAction
): types.ContactItemByIdState => {
  const newItem: Readonly<ContactItem> = action.payload;
  const newState = {
    ...state,
    [newItem.id]: newItem
  };
  return newState;
}

const contactItemRemoveEntry = (
  state: types.ContactItemByIdState,
  action: types.RemoveContactItemAction
): types.ContactItemByIdState => {
  const id: string = action.payload;
  const { [id]: _deletedContent, ...newState } = state;
  return newState;
}

const byIdInitialState: types.ContactItemByIdState = {};

const contactItemByIdReducer = (
  state = byIdInitialState,
  action: types.ContactItemActionTypes
): types.ContactItemByIdState => {
  switch (action.type) {
    case actionTypes.CONTACT_ITEM_ADD:
    case actionTypes.CONTACT_ITEM_UPDATE:
      return contactItemAddEntry(state, action);
    case actionTypes.CONTACT_ITEM_REMOVE:
      return contactItemRemoveEntry(state, action);
    default:
      return state;
  }
};


const contactItemAddId = (
  state: types.ContactItemAllIdsState,
  action: types.AddContactItemAction
): types.ContactItemAllIdsState => {
  const id = action.payload.id;
  return state.concat(id);
}

const contactItemRemoveId = (
  state: types.ContactItemAllIdsState,
  action: types.RemoveContactItemAction
): types.ContactItemAllIdsState => {
  const id = action.payload;
  return state.filter((currId: string) => currId !== id);
}

const allIdsInitialState: types.ContactItemAllIdsState = [];

const contactItemAllIdsReducer = (
  state = allIdsInitialState,
  action: types.ContactItemActionTypes
): types.ContactItemAllIdsState => {
  switch (action.type) {
    case actionTypes.CONTACT_ITEM_ADD:
      return contactItemAddId(state, action);
    case actionTypes.CONTACT_ITEM_UPDATE:
      return state;
    case actionTypes.CONTACT_ITEM_REMOVE:
      return contactItemRemoveId(state, action);
    default:
      return state;
  }
};


const contactItemReducer = combineReducers({
  byId: contactItemByIdReducer,
  allIds: contactItemAllIdsReducer,
});

export default contactItemReducer;
