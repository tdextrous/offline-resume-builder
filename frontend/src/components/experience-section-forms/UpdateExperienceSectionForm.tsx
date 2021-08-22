import React from 'react';
import ExperienceSectionForm from './ExperienceSectionForm';


interface Props {
  id: string;
  title: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
}

const UpdateExperienceSectionForm: React.FC<Props> = ({
  id,
  title,
  onSubmit,
  onCancelEdit,
  onDelete
}) => {

  return (
    <ExperienceSectionForm
      title="Edit Experience Section"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      initialFormState={{ id, title }}
    />
  );
}

export default UpdateExperienceSectionForm;

