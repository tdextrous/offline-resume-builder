/**
 * Redux action creators for 'Experience Section'
 */
import * as actionTypes from './experienceSection.actionTypes';
import { ExperienceSection } from '../../entity/index';
import * as types from './experienceSection.types';

export const addExperienceSection = (
  experienceSection: ExperienceSection
): types.AddExperienceSectionAction => {
  return {
    type: actionTypes.EXPERIENCE_SECTION_ADD,
    payload: experienceSection
  }
}

export const updateExperienceSection = (
  experienceSection: ExperienceSection
): types.UpdateExperienceSectionAction => {
  return {
    type: actionTypes.EXPERIENCE_SECTION_UPDATE,
    payload: experienceSection
  }
}

export const removeExperienceSection = (
  sectionId: string,
  relatedItemIds: string[],
  relatedContentIds: string[],
): types.RemoveExperienceSectionAction => {
  return {
    type: actionTypes.EXPERIENCE_SECTION_REMOVE,
    payload: {
      sectionId,
      relatedItemIds,
      relatedContentIds
    }
  }
}
