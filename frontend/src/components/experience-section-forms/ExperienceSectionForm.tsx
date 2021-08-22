import React, { useState } from 'react';

import { ModalForm, Input } from '../forms';

type ExperienceSectionFormData = {
  id: string,
  title: string,
};

interface Props {
  title: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: (id: string) => void;
  initialFormState?: ExperienceSectionFormData;
  shouldShowDeleteButton?: boolean;
}

const ExperienceSectionForm: React.FC<Props> = ({
  title,
  onSubmit,
  onCancelEdit,
  onDelete,
  initialFormState,
  shouldShowDeleteButton=true
}) => {

  return (
    <ModalForm
      title={title}
      onSubmit={onSubmit}
      onCancel={onCancelEdit}
      onDelete={onDelete}
      initialFormState={initialFormState}
      shouldShowDeleteButton={shouldShowDeleteButton}
      render={(experienceSectionForm, handleChange) => (
        <Input
          fieldName="title"
          type="text"
          label="Title"
          value={experienceSectionForm.title}
          onChange={handleChange}
        />
      )}/>
  );
}

export default ExperienceSectionForm;
