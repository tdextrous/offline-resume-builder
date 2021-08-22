import { createSelector } from 'reselect';
import type { RootState } from '../../redux/store';


export const getExperienceItemIds = (state: RootState) =>
  state.entity.experienceItem.allIds;

export const getExperienceItemRecords = (state: RootState) =>
  state.entity.experienceItem.byId;

export const getSectionId = (_: RootState, props: { sectionId: string }) =>
  props.sectionId;

export const getExperienceItemIdsFromSectionId = createSelector(
  [getSectionId, getExperienceItemIds, getExperienceItemRecords],
  (sectionId, allItemIds, itemsById) => 
    allItemIds.filter((id: string) => itemsById[id].sectionId === sectionId)
);

export const makeGetExperienceItemIdsFromSectionId = () => getExperienceItemIdsFromSectionId;
