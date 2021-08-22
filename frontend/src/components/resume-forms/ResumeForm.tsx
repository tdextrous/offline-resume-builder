import React from 'react';

import { ModalForm, Input } from '../forms';

type ResumeFormData = {
  id: string;
  title: string;
  contactItems: string[];
  sections: string[];
  items: string[];
  content: string[];
}

interface Props {
  title: string;
  onSubmit: (evt: any, payload: ResumeFormData) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
  initialFormState?: ResumeFormData;
  shouldShowDeleteButton?: boolean;
}

const ResumeForm: React.FC<Props> = ({
  title,
  onSubmit,
  onCancelEdit,
  onDelete,
  initialFormState,
  shouldShowDeleteButton
}) => {

  return (
    <ModalForm<ResumeFormData>
      title={title}
      onSubmit={onSubmit}
      onCancel={onCancelEdit}
      onDelete={onDelete}
      initialFormState={initialFormState}
      shouldShowDeleteButton={shouldShowDeleteButton}
      render={(formState, handleChange) => (
        <>
          <Input
            fieldName="title"
            label="Resume Title"
            type="text"
            value={formState.title}
            onChange={handleChange}
          />
        </>
    )}/>
  );
}

export default ResumeForm;
