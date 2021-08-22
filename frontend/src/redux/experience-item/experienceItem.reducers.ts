/**
 * Redux reducers for experience content
 */
import { combineReducers } from 'redux';
import * as types from './experienceItem.types';
import * as actionTypes from './experienceItem.actionTypes';
import { ExperienceItem } from '../../entity/index';

import { RemoveExperienceSectionAction } from '../experience-section/experienceSection.types';
import { EXPERIENCE_SECTION_REMOVE } from '../experience-section/experienceSection.actionTypes';


const experienceItemAddEntry = (
  state: types.ExperienceItemByIdState,
  action: types.AddExperienceItemAction | types.UpdateExperienceItemAction
): types.ExperienceItemByIdState => {
  const newItem: Readonly<ExperienceItem> = action.payload;
  const newState = {
    ...state,
    [newItem.id]: newItem
  };
  return newState;
}

const experienceItemRemoveEntry = (
  state: types.ExperienceItemByIdState,
  action: types.RemoveExperienceItemAction
): types.ExperienceItemByIdState => {
  const id: string = action.payload.itemId;
  const { [id]: _deletedItem, ...newState } = state;
  return newState;
}

const experienceItemRemoveManyEntries = (
  state: types.ExperienceItemByIdState,
  action: RemoveExperienceSectionAction
): types.ExperienceItemByIdState => {
  const itemIds: string[] = action.payload.relatedItemIds;
  let newState = state;
  for (const itemId of itemIds) {
    newState = experienceItemRemoveEntry(newState, {
      type: actionTypes.EXPERIENCE_ITEM_REMOVE,
      payload: {
        itemId,
        relatedContentIds: []
      }
    })
  }
  return newState;
}

const byIdInitialState: types.ExperienceItemByIdState = {};

type AllowedReducerActionTypes = types.ExperienceItemActionTypes
  | RemoveExperienceSectionAction;

const experienceItemByIdReducer = (
  state = byIdInitialState,
  action: AllowedReducerActionTypes
): types.ExperienceItemByIdState => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_ITEM_ADD:
    case actionTypes.EXPERIENCE_ITEM_UPDATE:
      return experienceItemAddEntry(state, action);
    case actionTypes.EXPERIENCE_ITEM_REMOVE:
      return experienceItemRemoveEntry(state, action);
    case EXPERIENCE_SECTION_REMOVE:
      return experienceItemRemoveManyEntries(state, action);
    default:
      return state;
  }
};


const experienceItemAddId = (
  state: types.ExperienceItemAllIdsState,
  action: types.AddExperienceItemAction
): types.ExperienceItemAllIdsState => {
  const id = action.payload.id;
  return state.concat(id);
}

const experienceItemRemoveId = (
  state: types.ExperienceItemAllIdsState,
  action: types.RemoveExperienceItemAction
): types.ExperienceItemAllIdsState => {
  const id = action.payload.itemId;
  return state.filter((currId: string) => currId !== id);
}

const experienceItemRemoveManyIds = (
  state: types.ExperienceItemAllIdsState,
  action: RemoveExperienceSectionAction
): types.ExperienceItemAllIdsState => {
  const itemIds: string[] = action.payload.relatedItemIds;
  let newState = state;
  for (const itemId of itemIds) {
    newState = experienceItemRemoveId(newState, {
      type: actionTypes.EXPERIENCE_ITEM_REMOVE,
      payload: {
        itemId,
        relatedContentIds: []
      }
    })
  }
  return newState;
}

const allIdsInitialState: types.ExperienceItemAllIdsState = [];

const experienceItemAllIdsReducer = (
  state = allIdsInitialState,
  action: AllowedReducerActionTypes
): types.ExperienceItemAllIdsState => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_ITEM_ADD:
      return experienceItemAddId(state, action);
    case actionTypes.EXPERIENCE_ITEM_UPDATE:
      return state;
    case actionTypes.EXPERIENCE_ITEM_REMOVE:
      return experienceItemRemoveId(state, action);
    case EXPERIENCE_SECTION_REMOVE:
      return experienceItemRemoveManyIds(state, action);
    default:
      return state;
  }
};


const experienceItemReducer = combineReducers({
  byId: experienceItemByIdReducer,
  allIds: experienceItemAllIdsReducer,
});

export default experienceItemReducer;
