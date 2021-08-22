import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';

import SectionPreview from './SectionPreview';

import './BasicTemplate.scss';


// Useful types.
import { ExperienceSection, ExperienceItem, ExperienceContent } from '../../entity';
type ExperienceItemSelection = Readonly<ExperienceItem> & { selectedContent?: Readonly<ExperienceContent>[] };
type ExperienceSectionSelection = Readonly<ExperienceSection> & { selectedItems?: ExperienceItemSelection[] };

interface OwnProps {
  resumeId: string;
}

const mapState = (state: RootState, props: OwnProps) => {
  const {
    user: userState,
    resume,
    experienceSection,
    experienceItem,
    experienceContent,
    contactItem,
  } = state.entity;
  const user = userState.byId['1'];
  const { resumeId } = props;

  const selectedResume = resume.byId[resumeId];
  const selectedExperienceSections = selectedResume.sections;
  const selectedExperienceItems = selectedResume.items;
  const selectedExperienceContent = selectedResume.content;
  const selectedContactItems = selectedResume.contactItems;
  const name = `${user.firstName} ${user.lastName}`;

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

const mapDispatch = { };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ResumePreview: React.FC<Props> = ({
  resumeId,
  name,
  sections,
  leftContactEntries,
  rightContactEntries
}) => {

  return (
    <div className="d-resume-wrapper">
      <p className="d-name">{name}</p>
      <div className="d-contact__container">
        <div className="d-contact__block">
          {leftContactEntries.map(obj => (
            <p key={obj.id} className="d-contact__item">{obj.content}</p>
          ))}
        </div>
        <div className="d-contact__block">
          {rightContactEntries.map(obj => (
            <p key={obj.id} className="d-contact__item">{obj.content}</p>
          ))}
        </div>
      </div>
      {sections.map(section => (
        <SectionPreview
          key={section.id}
          id={section.id}
          title={section.title}
          items={section.selectedItems}
        />
      ))}
    </div>
  );
}

export default connector(ResumePreview);
