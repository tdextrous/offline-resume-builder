import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateExperienceSection, removeExperienceSection } from '../../redux/experience-section';
import { getExperienceItemIdsFromSectionId } from '../../redux/experience-item';
import { getExperienceContentIdsFromSectionId } from '../../redux/experience-content';

import { ModalFormWrapper } from '../ui';
import ExperienceSectionCardDisplay from './ExperienceSectionCardDisplay';
import UpdateExperienceSectionForm from '../experience-section-forms/UpdateExperienceSectionForm';

interface OwnProps {
  id: string;
}

const mapState = (state: RootState, ownProps: OwnProps) => ({
  title: state.entity.experienceSection.byId[ownProps.id].title,
  relatedItemIds: getExperienceItemIdsFromSectionId(state, { sectionId: ownProps.id }),
  relatedContentIds: getExperienceContentIdsFromSectionId(state, { sectionId: ownProps.id }),
});

const mapDispatch = {
  updateExperienceSection,
  removeExperienceSection
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ExperienceSectionCard: React.FC<Props> = ({
  updateExperienceSection,
  removeExperienceSection,
  relatedItemIds,
  relatedContentIds,
  ...props
}) => {
  const handleSubmit = (submitPayload: any) => {
    updateExperienceSection(submitPayload);
  }

  const handleDelete = () => {
    const experienceSectionId = props.id;
    removeExperienceSection(experienceSectionId, relatedItemIds, relatedContentIds);
  }

  return (
    <ModalFormWrapper 
      display={ExperienceSectionCardDisplay}
      form={UpdateExperienceSectionForm}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      {...props}
    />
  );
}

export default connector(ExperienceSectionCard);
