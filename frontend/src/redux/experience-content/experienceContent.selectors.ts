import { createSelector } from 'reselect';
import type { RootState } from '../../redux/store';

import { getExperienceItemIdsFromSectionId } from '../experience-item/experienceItem.selectors';


// Get all experience-content records, no filtering.
export const getExperienceContentRecords = (state: RootState) => 
  state.entity.experienceContent.byId;

export const getExperienceContentIds = (state: RootState) =>
  state.entity.experienceContent.allIds;

export const getItemId = (_: RootState, props: { id: string }) =>
  props.id;

export const getSectionId = (_: RootState, props: { sectionId: string }) =>
  props.sectionId;

// Could be important: 
// https://github.com/reduxjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
export const getExperienceContentIdsFromItemId = createSelector(
  [getItemId, getExperienceContentIds, getExperienceContentRecords],
  (itemId, allIds, byId) =>
    allIds.filter((id: string) => byId[id].itemId === itemId)
);

export const getExperienceContentRecordsFromItemId = createSelector(
  [getExperienceContentRecords, getExperienceContentIdsFromItemId],
  (allRecords: Record<string, Object>, filteredIds: string[]) => {
    const result: typeof allRecords = {};
    for (const id of filteredIds) {
      result[id] = allRecords[id];
    }
    return result;
  }
);

/**
 * NOTE: consider using flatMap (requires newer jslib) instead of reduce/concat
 */
export const getExperienceContentIdsFromSectionId = createSelector(
  [getExperienceItemIdsFromSectionId, getExperienceContentIds, getExperienceContentRecords],
  (itemIds, allContentIds, contentById) =>
    itemIds.reduce((acc: string[], itemId: string) =>
      acc.concat(
        allContentIds.filter((contentId: string) => contentById[contentId].itemId === itemId)
      ), [])
);
