/**
 * TS types for redux related logic.
 */
import { Action } from '../../types/redux.types';
import * as types from './experienceItem.actionTypes';
import { ExperienceItem } from '../../entity/index';

export type AddExperienceItemAction = Action<
  typeof types.EXPERIENCE_ITEM_ADD,
  ExperienceItem>;

export type UpdateExperienceItemAction = Action<
  typeof types.EXPERIENCE_ITEM_UPDATE,
  ExperienceItem>;

export type RemoveExperienceItemAction = Action<
  typeof types.EXPERIENCE_ITEM_REMOVE,
  { itemId: string, relatedContentIds: string[] }>;

export type ExperienceItemActionTypes = AddExperienceItemAction
  | UpdateExperienceItemAction
  | RemoveExperienceItemAction;

export type ExperienceItemByIdState = Record<string, Readonly<ExperienceItem>>;
export type ExperienceItemAllIdsState = string[];
export type ExperienceItemState = {
  byId: ExperienceItemByIdState,
  allIds: ExperienceItemAllIdsState
}
