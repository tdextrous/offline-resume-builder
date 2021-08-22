import React from 'react';
import ExperienceSectionForm from './ExperienceSectionForm';
import { Guid } from 'guid-typescript';


interface Props {
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
}

const AddExperienceSectionForm: React.FC<Props> = ({
  onSubmit,
  onCancelEdit,
  onDelete
}) => {

  return (
    <ExperienceSectionForm
      title="Add Experience Section"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      initialFormState={{ id: Guid.raw(), title: '' }}
      shouldShowDeleteButton={false}
    />
  );
}

export default AddExperienceSectionForm;
