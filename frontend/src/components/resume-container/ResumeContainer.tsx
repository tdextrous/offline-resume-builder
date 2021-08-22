import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addResume } from '../../redux/resume';

import { ModalFormWrapper } from '../ui';
import ResumeContainerDisplay from './ResumeContainerDisplay';
import AddResumeForm from '../resume-forms/AddResumeForm';


const mapState = () => ({})

const mapDispatch = {
  addResume
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ResumeContainer: React.FC<PropsFromRedux> = ({
  addResume
}) => {
  const handleSubmit = (submitPayload: any) => {
    addResume(submitPayload);
  }

  return (
    <ModalFormWrapper
      display={ResumeContainerDisplay}
      form={AddResumeForm}
      onSubmit={handleSubmit}
    />
  );
}

export default connector(ResumeContainer);
