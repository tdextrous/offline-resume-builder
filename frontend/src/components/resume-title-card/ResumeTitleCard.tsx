import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateResume, removeResume } from '../../redux/resume';

import { ModalFormWrapper } from '../ui';
import ResumeTitleCardDisplay from './ResumeTitleCardDisplay';
import UpdateResumeForm from '../resume-forms/UpdateResumeForm';

type OwnProps = {
  resumeId: string;
}

const mapState = (state: RootState, props: OwnProps) => ({
  ...state.entity.resume.byId[props.resumeId]
});
const mapDispatch = {
  updateResume,
  removeResume
}
const connector = connect(mapState, mapDispatch);

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;
type Props = OwnProps & StateProps & DispatchProps;

const ResumeTitleCard: React.FC<Props> = ({
  resumeId,
  updateResume,
  removeResume,
  ...props
}) => {
  const handleSubmit = (payload: any) => {
    updateResume(payload);
  }

  const handleDelete = () => {
    removeResume(resumeId);
  }

  return (
    <ModalFormWrapper
      display={ResumeTitleCardDisplay}
      form={UpdateResumeForm}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      id={resumeId}
      {...props}
    />
  );
}

export default connector(ResumeTitleCard);
