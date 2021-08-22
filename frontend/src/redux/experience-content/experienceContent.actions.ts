/**
 * Redux action creators for 'Experience Content'
 */
import * as actionTypes from './experienceContent.actionTypes';
import { ExperienceContent } from '../../entity/index';
import * as types from './experienceContent.types';

export const addExperienceContent = (
  experienceContent: ExperienceContent
): types.AddExperienceContentAction => {
  return {
    type: actionTypes.EXPERIENCE_CONTENT_ADD,
    payload: experienceContent
  }
}

export const updateExperienceContent = (
  experienceContent: ExperienceContent
): types.UpdateExperienceContentAction => {
  return {
    type: actionTypes.EXPERIENCE_CONTENT_UPDATE,
    payload: experienceContent
  }
}

export const removeExperienceContent = (
  id: string
): types.RemoveExperienceContentAction => {
  return {
    type: actionTypes.EXPERIENCE_CONTENT_REMOVE,
    payload: id
  }
}
