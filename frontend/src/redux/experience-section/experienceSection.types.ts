/**
 * TS types for redux related logic.
 */
import { Action } from '../../types/redux.types';
import * as types from './experienceSection.actionTypes';
import { ExperienceSection } from '../../entity/index';

export type AddExperienceSectionAction = Action<
  typeof types.EXPERIENCE_SECTION_ADD,
  ExperienceSection>;

export type UpdateExperienceSectionAction = Action<
  typeof types.EXPERIENCE_SECTION_UPDATE,
  ExperienceSection>;

export type RemoveExperienceSectionAction = Action<
  typeof types.EXPERIENCE_SECTION_REMOVE,
  { sectionId: string, relatedItemIds: string[], relatedContentIds: string[] }>;

export type ExperienceSectionActionTypes = AddExperienceSectionAction
  | UpdateExperienceSectionAction
  | RemoveExperienceSectionAction;

export type ExperienceSectionByIdState = Record<string, Readonly<ExperienceSection>>;
export type ExperienceSectionAllIdsState = string[];
export type ExperienceSectionState = {
  byId: ExperienceSectionByIdState,
  allIds: ExperienceSectionAllIdsState
}
