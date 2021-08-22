import React from 'react';
import { Guid } from 'guid-typescript';

import ResumeForm from './ResumeForm';


interface Props {
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
}

const AddResumeForm: React.FC<Props> = ({
  ...props
}) => {

  return (
    <ResumeForm
      title="Add Resume"
      initialFormState={{
        id: Guid.raw(),
        title: "",
        contactItems: [],
        sections: [],
        items: [],
        content: []
      }}
      {...props}
      shouldShowDeleteButton={false}
    />
  );
}

export default AddResumeForm;
