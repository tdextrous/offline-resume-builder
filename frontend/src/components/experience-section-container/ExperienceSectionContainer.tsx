// LEGACY NOTE:  Previously called <MyExperienceContainer />
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addExperienceSection } from '../../redux/experience-section';

import { ModalFormWrapper } from '../ui';
import AddExperienceSectionForm from '../experience-section-forms/AddExperienceSectionForm';
import ExperienceSectionContainerDisplay from './ExperienceSectionContainerDisplay';


const mapState = () => ({})

const mapDispatch = {
  addExperienceSection
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ExperienceSectionContainer: React.FC<PropsFromRedux> = ({
  addExperienceSection
}) => {

  const handleSubmit = (submitPayload: any) => {
    addExperienceSection(submitPayload);
  }

  return (
    <ModalFormWrapper
      display={ExperienceSectionContainerDisplay}
      form={AddExperienceSectionForm}
      onSubmit={handleSubmit}
    />
  );
}


export default connector(ExperienceSectionContainer);
