/**
 * Redux reducers for experience sections
 */
import { combineReducers } from 'redux';
import * as types from './experienceSection.types';
import * as actionTypes from './experienceSection.actionTypes';
import { ExperienceSection } from '../../entity/index';


const experienceSectionAddEntry = (
  state: types.ExperienceSectionByIdState,
  action: types.AddExperienceSectionAction | types.UpdateExperienceSectionAction
): types.ExperienceSectionByIdState => {
  const newItem: Readonly<ExperienceSection> = action.payload;
  const newState = {
    ...state,
    [newItem.id]: newItem
  };
  return newState;
}

const experienceSectionRemoveEntry = (
  state: types.ExperienceSectionByIdState,
  action: types.RemoveExperienceSectionAction
): types.ExperienceSectionByIdState => {
  const id: string = action.payload.sectionId;
  const { [id]: _deletedContent, ...newState } = state;
  return newState;
}


/**
 * Initial state generation:
 *
 * For offline version, we want the app to start off with the
 * following sections:
 *  - 'Education'
 *  - 'Experience'
 *  - 'Skills'
 *
 *  So, we run that logic here in the reducer file.
 *  This is not really a no-no because the side effect is in initial state
 *  generation and not in the reducer itself.
 */
import { Guid } from 'guid-typescript';
const educationSection = {
  id: Guid.raw(),
  title: 'Education'
}
const experienceSection = {
  id: Guid.raw(),
  title: 'Experience'
}
const skillsSection = {
  id: Guid.raw(),
  title: 'Skills'
}

const byIdInitialState: types.ExperienceSectionByIdState = {
  [educationSection.id]: educationSection,
  [experienceSection.id]: experienceSection,
  [skillsSection.id]: skillsSection
};
const allIdsInitialState: types.ExperienceSectionAllIdsState = [
  educationSection.id,
  experienceSection.id,
  skillsSection.id
];


const experienceSectionByIdReducer = (
  state = byIdInitialState,
  action: types.ExperienceSectionActionTypes
): types.ExperienceSectionByIdState => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_SECTION_ADD:
    case actionTypes.EXPERIENCE_SECTION_UPDATE:
      return experienceSectionAddEntry(state, action);
    case actionTypes.EXPERIENCE_SECTION_REMOVE:
      return experienceSectionRemoveEntry(state, action);
    default:
      return state;
  }
};


const experienceSectionAddId = (
  state: types.ExperienceSectionAllIdsState,
  action: types.AddExperienceSectionAction
): types.ExperienceSectionAllIdsState => {
  const id = action.payload.id;
  return state.concat(id);
}

const experienceSectionRemoveId = (
  state: types.ExperienceSectionAllIdsState,
  action: types.RemoveExperienceSectionAction
): types.ExperienceSectionAllIdsState => {
  const id = action.payload.sectionId;
  return state.filter((currId: string) => currId !== id);
}

const experienceSectionAllIdsReducer = (
  state = allIdsInitialState,
  action: types.ExperienceSectionActionTypes
): types.ExperienceSectionAllIdsState => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_SECTION_ADD:
      return experienceSectionAddId(state, action);
    case actionTypes.EXPERIENCE_SECTION_UPDATE:
      return state;
    case actionTypes.EXPERIENCE_SECTION_REMOVE:
      return experienceSectionRemoveId(state, action);
    default:
      return state;
  }
};


const experienceSectionReducer = combineReducers({
  byId: experienceSectionByIdReducer,
  allIds: experienceSectionAllIdsReducer,
});

export default experienceSectionReducer;
