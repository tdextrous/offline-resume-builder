import { convertDateToString } from '../../utils';
import type { RootState } from '../../redux/store';

import { ExperienceSection, ExperienceItem, ExperienceContent } from '../../entity';
type ExperienceItemSelection = Readonly<ExperienceItem> & { selectedContent?: Readonly<ExperienceContent>[] };
type ExperienceSectionSelection = Readonly<ExperienceSection> & { selectedItems?: ExperienceItemSelection[] };

export const getResumeTitle = (state: RootState, props: { resumeId: string }) => {
  const { resumeId } = props;
  const resume = state.entity.resume.byId[resumeId];
  const resumeTitle = resume.title;
  return resumeTitle;
}

export const getResumeStateTree = (state: RootState, props: { resumeId: string }) => {
  const { resumeId } = props;
  const {
    user,
    resume,
    experienceSection,
    experienceItem,
    experienceContent,
    contactItem
  } = state.entity;

  const selectedResume = resume.byId[resumeId];
  const selectedExperienceSections = selectedResume.sections;
  const selectedExperienceItems = selectedResume.items;
  const selectedExperienceContent = selectedResume.content;
  const selectedContactItems = selectedResume.contactItems;
  const name = `${user.byId['1'].firstName} ${user.byId['1'].lastName}`

  // Get array of entries for sections, items, and content

  // This is the array of entries corresponding to ids in resume.sections.
  const selectedSectionEntries: ExperienceSectionSelection[] = [];
  for (let sectionId of selectedExperienceSections) {
    const currSection = { ...experienceSection.byId[sectionId] };
    selectedSectionEntries.push(currSection);
  }

  // This is the array of entries corresponding to ids in resume.items
  const selectedItemEntries: ExperienceItemSelection[] = [];
  for (let itemId of selectedExperienceItems) {
    const currItem = { ...experienceItem.byId[itemId] };
    selectedItemEntries.push(currItem);
  }

  // This is the array of entries corresponding to ids in resume.content
  const selectedContentEntries = [];
  for (let contentId of selectedExperienceContent) {
    const currContent = { ...experienceContent.byId[contentId] };
    selectedContentEntries.push(currContent);
  }

  // This corresonds to ids in resume.contactItems, just alternated between two lists.
  const leftContactEntries = [];
  const rightContactEntries = [];
  let contactCounter = 0;
  for (let contactId of selectedContactItems) {
    const currContact = {...contactItem.byId[contactId] };
    if (Object.entries(currContact).length !== 0) {
      if (contactCounter % 2 === 0) {
        leftContactEntries.push(currContact);
      } else {
        rightContactEntries.push(currContact);
      }
      contactCounter++;
    }
  }

  // Start from bottom up and assign the correct objects to their parents
  // This will create a monster mega tree.
  for (let i = 0; i < selectedContentEntries.length; i++) {
    for (let j = 0; j < selectedItemEntries.length; j++) {
      if (selectedContentEntries[i].itemId === selectedItemEntries[j].id) {
        if (!selectedItemEntries[j].hasOwnProperty('selectedContent')) {
          selectedItemEntries[j].selectedContent = [];
        }
        selectedItemEntries[j].selectedContent.push(selectedContentEntries[i]);
      }
    }
  }


  for (let i = 0; i < selectedItemEntries.length; i++) {
    for (let j = 0; j < selectedSectionEntries.length; j++) {
      if (selectedItemEntries[i].sectionId === selectedSectionEntries[j].id) {
        if (!selectedSectionEntries[j].hasOwnProperty('selectedItems')) {
          selectedSectionEntries[j].selectedItems = [];
        }
        selectedSectionEntries[j].selectedItems.push(selectedItemEntries[i]);
      };
    };
  };

  // Split contact items into 2 different arrays
  return {
    name: name,
    sections: selectedSectionEntries,
    leftContactEntries,
    rightContactEntries,
  }
}
