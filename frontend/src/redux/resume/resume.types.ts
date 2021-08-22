/**
 * TS types for redux related logic.
 */
import { Action } from '../../types/redux.types';
import * as types from './resume.actionTypes';
import { Resume } from '../../entity/index';

export type AddResumeAction = Action<
  typeof types.RESUME_ADD,
  Resume>;

export type UpdateResumeAction = Action<
  typeof types.RESUME_UPDATE,
  Resume>;

export type RemoveResumeAction = Action<
  typeof types.RESUME_REMOVE,
  string>;

export type SelectContactResumeAction = Action<
  typeof types.RESUME_SELECT_CONTACT,
  { resumeId: string, contactItemId: string }>;

export type SelectSectionResumeAction = Action<
  typeof types.RESUME_SELECT_SECTION,
  { resumeId: string, sectionId: string }>;

export type SelectItemResumeAction = Action<
  typeof types.RESUME_SELECT_ITEM,
  { resumeId: string, itemId: string }>;

export type SelectContentResumeAction = Action<
  typeof types.RESUME_SELECT_CONTENT,
  { resumeId: string, contentId: string }>;



export type ResumeActionTypes = AddResumeAction
  | UpdateResumeAction
  | RemoveResumeAction
  | SelectContactResumeAction
  | SelectSectionResumeAction
  | SelectItemResumeAction
  | SelectContentResumeAction;

export type ResumeByIdState = Record<string, Readonly<Resume>>;
export type ResumeAllIdsState = string[];
export type ResumeState = {
  byId: ResumeByIdState,
  allIds: ResumeAllIdsState
}
