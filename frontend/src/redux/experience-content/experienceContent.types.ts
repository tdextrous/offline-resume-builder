/**
 * TS types for redux related logic.
 */
import { Action } from '../../types/redux.types';
import * as types from './experienceContent.actionTypes';
import { ExperienceContent } from '../../entity/index';

export type AddExperienceContentAction = Action<
  typeof types.EXPERIENCE_CONTENT_ADD,
  ExperienceContent>;

export type UpdateExperienceContentAction = Action<
  typeof types.EXPERIENCE_CONTENT_UPDATE,
  ExperienceContent>;

export type RemoveExperienceContentAction = Action<
  typeof types.EXPERIENCE_CONTENT_REMOVE,
  string>;

export type ExperienceContentActionTypes = AddExperienceContentAction
  | UpdateExperienceContentAction
  | RemoveExperienceContentAction;

export type ExperienceContentByIdState = Record<string, Readonly<ExperienceContent>>;
export type ExperienceContentAllIdsState = string[];
export type ExperienceContentState = {
  byId: ExperienceContentByIdState,
  allIds: ExperienceContentAllIdsState
}
