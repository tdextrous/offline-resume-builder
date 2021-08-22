import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addExperienceItem } from '../../redux/experience-item';
import { addExperienceContent } from '../../redux/experience-content';

import { ModalFormWrapper } from '../ui';
import AddExperienceItemForm from '../experience-item-forms/AddExperienceItemForm';
import ExperienceItemContainerDisplay from './ExperienceItemContainerDisplay';


const mapState = () => ({})

const mapDispatch = {
  addExperienceItem,
  addExperienceContent,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  sectionId: string;
}

const ExperienceItemContainer: React.FC<Props> = ({
  sectionId,
  addExperienceItem,
  addExperienceContent,
}) => {

  const handleSubmit = (submitPayload: any) => {
    const { content, ...expItemPayload } = submitPayload;

    addExperienceItem(expItemPayload);

    for (const contentId of Object.keys(content)) {
      const contentPayload = content[contentId];
      addExperienceContent(contentPayload);
    }
  }

  return (
    <ModalFormWrapper
      display={ExperienceItemContainerDisplay}
      form={AddExperienceItemForm}
      onSubmit={handleSubmit}
      sectionId={sectionId}
    />
  );
}


export default connector(ExperienceItemContainer);
