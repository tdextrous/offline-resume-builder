/**
 * Redux reducers for experience content
 */
import { combineReducers } from 'redux';
import * as types from './resume.types';

import * as contactItemTypes from '../contact-item/contactItem.actionTypes';
import * as sectionTypes from '../experience-section/experienceSection.actionTypes';
import * as itemTypes from '../experience-item/experienceItem.actionTypes';
import * as contentTypes from '../experience-content/experienceContent.actionTypes';

import * as actionTypes from './resume.actionTypes';

import type { RemoveExperienceSectionAction } from '../experience-section/experienceSection.types';
import type { RemoveExperienceItemAction } from '../experience-item/experienceItem.types';
import type { RemoveExperienceContentAction } from '../experience-content/experienceContent.types';
import type { RemoveContactItemAction } from '../contact-item/contactItem.types';

import { Resume } from '../../entity/index';


const resumeAddEntry = (
  state: types.ResumeByIdState,
  action: types.AddResumeAction | types.UpdateResumeAction
): types.ResumeByIdState => {
  const newItem: Readonly<Resume> = action.payload;
  const newState = {
    ...state,
    [newItem.id]: newItem
  };
  return newState;
}

const resumeRemoveEntry = (
  state: types.ResumeByIdState,
  action: types.RemoveResumeAction
): types.ResumeByIdState => {
  const id: string = action.payload;
  const { [id]: _deletedContent, ...newState } = state;
  return newState;
}

const resumeSelectContactItem = (
  state: types.ResumeByIdState,
  action: types.SelectContactResumeAction
): types.ResumeByIdState => {
  const resume = state[action.payload.resumeId];
  const newId = action.payload.contactItemId;
  const selected = resume.contactItems;
  let newSelected: string[] = [];
  if (selected.includes(newId)) {
    newSelected = selected.filter(id => id !== newId);
  } else {
    newSelected = selected.concat([newId]);
  }
  const newResume = {
    ...resume,
    contactItems: newSelected
  }
  return {
    ...state,
    [action.payload.resumeId]: newResume
  }
}

const resumeSelectSection = (
  state: types.ResumeByIdState,
  action: types.SelectSectionResumeAction
): types.ResumeByIdState => {
  const resume = state[action.payload.resumeId];
  const newId = action.payload.sectionId;
  const selected = resume.sections;
  let newSelected: string[] = [];
  if (selected.includes(newId)) {
    newSelected = selected.filter(id => id !== newId);
  } else {
    newSelected = selected.concat([newId]);
  }
  const newResume = {
    ...resume,
    sections: newSelected
  }
  return {
    ...state,
    [action.payload.resumeId]: newResume
  }
}

const resumeSelectItem = (
  state: types.ResumeByIdState,
  action: types.SelectItemResumeAction
): types.ResumeByIdState => {
  const resume = state[action.payload.resumeId];
  const newId = action.payload.itemId;
  const selected = resume.items;
  let newSelected: string[] = [];
  if (selected.includes(newId)) {
    newSelected = selected.filter(id => id !== newId);
  } else {
    newSelected = selected.concat([newId]);
  }
  const newResume = {
    ...resume,
    items: newSelected
  }
  return {
    ...state,
    [action.payload.resumeId]: newResume
  }
}

const resumeSelectContent = (
  state: types.ResumeByIdState,
  action: types.SelectContentResumeAction
): types.ResumeByIdState => {
  const resume = state[action.payload.resumeId];
  const newId = action.payload.contentId;
  const selected = resume.content;
  let newSelected: string[] = [];
  if (selected.includes(newId)) {
    newSelected = selected.filter(id => id !== newId);
  } else {
    newSelected = selected.concat([newId]);
  }
  const newResume = {
    ...resume,
    content: newSelected
  }
  return {
    ...state,
    [action.payload.resumeId]: newResume
  }
}

const removeContactItems = (
  state: types.ResumeByIdState,
  action: RemoveContactItemAction
): types.ResumeByIdState => {
  const contactId = action.payload;
  let newState = state;
  for (const resumeId of Object.keys(state)) {
    const currResume = state[resumeId];
    const selected = currResume.contactItems;
    const newSelected = selected.filter(id => id !== contactId);
    const newResume = {
      ...currResume,
      contactItems: newSelected
    }
    newState = {
      ...newState,
      [resumeId]: newResume
    }
  }
  return newState;
}

const removeExperienceSections = (
  state: types.ResumeByIdState,
  action: RemoveExperienceSectionAction
): types.ResumeByIdState => {
  const { sectionId, relatedItemIds, relatedContentIds } = action.payload;
  let newState = state;
  for (const resumeId of Object.keys(state)) {
    const currResume = state[resumeId];

    const newSections = currResume.sections.filter(id => id !== sectionId);
    const newItems = currResume.items.filter(id => !relatedItemIds.includes(id));
    const newContent = currResume.content.filter(id => !relatedContentIds.includes(id));

    const newResume = {
      ...currResume,
      sections: newSections,
      items: newItems,
      content: newContent
    }
    newState = {
      ...newState,
      [resumeId]: newResume
    }
  }
  return newState;
}

const removeExperienceItems = (
  state: types.ResumeByIdState,
  action: RemoveExperienceItemAction
): types.ResumeByIdState => {
  const { itemId, relatedContentIds } = action.payload;
  let newState = state;
  for (const resumeId of Object.keys(state)) {
    const currResume = state[resumeId];

    const newItems = currResume.items.filter(id => id !== itemId);
    const newContent = currResume.content.filter(id => !relatedContentIds.includes(id));

    const newResume = {
      ...currResume,
      items: newItems,
      content: newContent
    }
    newState = {
      ...newState,
      [resumeId]: newResume
    }
  }
  return newState;
}

const removeExperienceContent = (
  state: types.ResumeByIdState,
  action: RemoveExperienceContentAction
): types.ResumeByIdState => {
  const contentId = action.payload;
  let newState = state;
  for (const resumeId of Object.keys(state)) {
    const currResume = state[resumeId];

    const newContent = currResume.content.filter(id => id !== contentId);

    const newResume = {
      ...currResume,
      content: newContent
    }
    newState = {
      ...newState,
      [resumeId]: newResume
    }
  }
  return newState;
}


const byIdInitialState: types.ResumeByIdState = {};

type AllowedReducerActionTypes = types.ResumeActionTypes 
  | RemoveContactItemAction 
  | RemoveExperienceSectionAction 
  | RemoveExperienceItemAction 
  | RemoveExperienceContentAction;

const resumeByIdReducer = (
  state = byIdInitialState,
  action: AllowedReducerActionTypes
): types.ResumeByIdState => {
  switch (action.type) {
    case actionTypes.RESUME_ADD:
    case actionTypes.RESUME_UPDATE:
      return resumeAddEntry(state, action);
    case actionTypes.RESUME_REMOVE:
      return resumeRemoveEntry(state, action);
    case actionTypes.RESUME_SELECT_CONTACT:
      return resumeSelectContactItem(state, action);
    case actionTypes.RESUME_SELECT_SECTION:
      return resumeSelectSection(state, action);
    case actionTypes.RESUME_SELECT_ITEM:
      return resumeSelectItem(state, action);
    case actionTypes.RESUME_SELECT_CONTENT:
      return resumeSelectContent(state, action);
    case contactItemTypes.CONTACT_ITEM_REMOVE:
      return removeContactItems(state, action);
    case sectionTypes.EXPERIENCE_SECTION_REMOVE:
      return removeExperienceSections(state, action);
    case itemTypes.EXPERIENCE_ITEM_REMOVE:
      return removeExperienceItems(state, action);
    case contentTypes.EXPERIENCE_CONTENT_REMOVE:
      return removeExperienceContent(state, action);
    default:
      return state;
  }
};


const resumeAddId = (
  state: types.ResumeAllIdsState,
  action: types.AddResumeAction
): types.ResumeAllIdsState => {
  const id = action.payload.id;
  return state.concat(id);
}

const resumeRemoveId = (
  state: types.ResumeAllIdsState,
  action: types.RemoveResumeAction
): types.ResumeAllIdsState => {
  const id = action.payload;
  return state.filter((currId: string) => currId !== id);
}

const allIdsInitialState: types.ResumeAllIdsState = [];

const resumeAllIdsReducer = (
  state = allIdsInitialState,
  action: types.ResumeActionTypes
): types.ResumeAllIdsState => {
  switch (action.type) {
    case actionTypes.RESUME_ADD:
      return resumeAddId(state, action);
    case actionTypes.RESUME_UPDATE:
      return state;
    case actionTypes.RESUME_REMOVE:
      return resumeRemoveId(state, action);
    default:
      return state;
  }
};


const resumeReducer = combineReducers({
  byId: resumeByIdReducer,
  allIds: resumeAllIdsReducer,
});

export default resumeReducer;
