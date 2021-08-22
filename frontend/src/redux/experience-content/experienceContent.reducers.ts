/**
 * Redux reducers for experience content
 */
import { combineReducers } from 'redux';
import * as types from './experienceContent.types';
import * as actionTypes from './experienceContent.actionTypes';
import { ExperienceContent } from '../../entity/index';

import { RemoveExperienceSectionAction } from '../experience-section/experienceSection.types';
import { EXPERIENCE_SECTION_REMOVE } from '../experience-section/experienceSection.actionTypes';

import { RemoveExperienceItemAction } from '../experience-item/experienceItem.types';
import { EXPERIENCE_ITEM_REMOVE } from '../experience-item/experienceItem.actionTypes';


const experienceContentAddEntry = (
  state: types.ExperienceContentByIdState,
  action: types.AddExperienceContentAction | types.UpdateExperienceContentAction
): types.ExperienceContentByIdState => {
  const newItem: Readonly<ExperienceContent> = action.payload;
  const newState = {
    ...state,
    [newItem.id]: newItem
  };
  return newState;
}

const experienceContentRemoveEntry = (
  state: types.ExperienceContentByIdState,
  action: types.RemoveExperienceContentAction
): types.ExperienceContentByIdState => {
  const id: string = action.payload;
  const { [id]: _deletedContent, ...newState } = state;
  return newState;
}

const experienceContentRemoveManyEntries = (
  state: types.ExperienceContentByIdState,
  action: RemoveExperienceSectionAction | RemoveExperienceItemAction
): types.ExperienceContentByIdState => {
  const contentIds: string[] = action.payload.relatedContentIds;
  let newState = state;
  for (const contentId of contentIds) {
    newState = experienceContentRemoveEntry(newState, {
      type: actionTypes.EXPERIENCE_CONTENT_REMOVE,
      payload: contentId
    });
  }
  return newState;
}

const byIdInitialState: types.ExperienceContentByIdState = {};

type AllowedReducerActionTypes = types.ExperienceContentActionTypes 
  | RemoveExperienceSectionAction
  | RemoveExperienceItemAction;

const experienceContentByIdReducer = (
  state = byIdInitialState,
  action: AllowedReducerActionTypes
): types.ExperienceContentByIdState => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_CONTENT_ADD:
    case actionTypes.EXPERIENCE_CONTENT_UPDATE:
      return experienceContentAddEntry(state, action);
    case actionTypes.EXPERIENCE_CONTENT_REMOVE:
      return experienceContentRemoveEntry(state, action);
    case EXPERIENCE_SECTION_REMOVE:
    case EXPERIENCE_ITEM_REMOVE:
      return experienceContentRemoveManyEntries(state, action);
    default:
      return state;
  }
};


const experienceContentAddId = (
  state: types.ExperienceContentAllIdsState,
  action: types.AddExperienceContentAction
): types.ExperienceContentAllIdsState => {
  const id = action.payload.id;
  return state.concat(id);
}

const experienceContentRemoveId = (
  state: types.ExperienceContentAllIdsState,
  action: types.RemoveExperienceContentAction
): types.ExperienceContentAllIdsState => {
  const id = action.payload;
  return state.filter((currId: string) => currId !== id);
}

const experienceContentRemoveManyIds = (
  state: types.ExperienceContentAllIdsState,
  action: RemoveExperienceSectionAction | RemoveExperienceItemAction
): types.ExperienceContentAllIdsState => {
  const contentIds: string[] = action.payload.relatedContentIds;
  let newState = state;
  for (const contentId of contentIds) {
    newState = experienceContentRemoveId(newState, {
      type: actionTypes.EXPERIENCE_CONTENT_REMOVE,
      payload: contentId
    })
  }
  return newState;
}

const allIdsInitialState: types.ExperienceContentAllIdsState = [];

const experienceContentAllIdsReducer = (
  state = allIdsInitialState,
  action: AllowedReducerActionTypes
): types.ExperienceContentAllIdsState => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_CONTENT_ADD:
      return experienceContentAddId(state, action);
    case actionTypes.EXPERIENCE_CONTENT_UPDATE:
      return state;
    case actionTypes.EXPERIENCE_CONTENT_REMOVE:
      return experienceContentRemoveId(state, action);
    case EXPERIENCE_SECTION_REMOVE:
    case EXPERIENCE_ITEM_REMOVE:
      return experienceContentRemoveManyIds(state, action);
    default:
      return state;
  }
};


const experienceContentReducer = combineReducers({
  byId: experienceContentByIdReducer,
  allIds: experienceContentAllIdsReducer,
});

export default experienceContentReducer;
