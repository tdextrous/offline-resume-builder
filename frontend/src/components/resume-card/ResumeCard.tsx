import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateResume, removeResume } from '../../redux/resume';

import { ModalFormWrapper } from '../ui';
import ResumeCardDisplay from './ResumeCardDisplay';
import UpdateResumeForm from '../resume-forms/UpdateResumeForm';



interface OwnProps {
  id: string;
};

const mapState = (state: RootState, props: OwnProps) => ({
  ...state.entity.resume.byId[props.id]
});
const mapDispatch = {
  updateResume,
  removeResume
}
const connector = connect(mapState, mapDispatch);
type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

type Props = OwnProps & StateProps & DispatchProps;

const ResumeCard: React.FC<Props> = ({
  id,
  updateResume,
  removeResume,
  ...props
}) => {
  const handleSubmit = (submitPayload: any) => {
    updateResume(submitPayload);
  }

  const handleDelete = () => {
    removeResume(id);
  }

  return (
    <ModalFormWrapper
      display={ResumeCardDisplay}
      form={UpdateResumeForm}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      id={id}
      {...props}
    />
  );
}

export default connector(ResumeCard);
