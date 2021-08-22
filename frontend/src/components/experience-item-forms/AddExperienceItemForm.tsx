import React from 'react';
import ExperienceItemForm from './ExperienceItemForm';
import { Guid } from 'guid-typescript';

interface Props {
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
  onDeleteContentItem: (id: string) => void;
  sectionId: string;
}

const AddExperienceItemForm: React.FC<Props> = ({
  sectionId,
  onSubmit,
  onCancelEdit,
  onDelete,
  onDeleteContentItem
}) => {

  return (
    <ExperienceItemForm
      title="Add Experience Item"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      onDeleteContentItem={onDeleteContentItem}
      initialFormState={{ 
        id: Guid.raw(), 
        heading: '',
        location: '',
        subheading: '',
        startDate: null,
        endDate: null,
        content: {},
        sectionId: sectionId,
      }}
      shouldShowDeleteButton={false}
    />
  );
}

export default AddExperienceItemForm;
