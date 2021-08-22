/**
 * Redux action creators for 'Experience Item'
 */
import * as actionTypes from './experienceItem.actionTypes';
import { ExperienceItem } from '../../entity/index';
import * as types from './experienceItem.types';

export const addExperienceItem = (
  experienceItem: ExperienceItem
): types.AddExperienceItemAction => {
  return {
    type: actionTypes.EXPERIENCE_ITEM_ADD,
    payload: experienceItem
  }
}

export const updateExperienceItem = (
  experienceItem: ExperienceItem
): types.UpdateExperienceItemAction => {
  return {
    type: actionTypes.EXPERIENCE_ITEM_UPDATE,
    payload: experienceItem
  }
}

export const removeExperienceItem = (
  itemId: string,
  relatedContentIds: string[]
): types.RemoveExperienceItemAction => {
  return {
    type: actionTypes.EXPERIENCE_ITEM_REMOVE,
    payload: {
      itemId,
      relatedContentIds
    }
  }
}
