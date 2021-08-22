import React from 'react';
import ExperienceItemForm from './ExperienceItemForm';

interface Props {
  id: string;
  heading: string;
  location: string;
  subheading: string;
  startDate: Date;
  endDate: Date;
  contentById: Record<string, {id: string, content: string, itemId: string}>;
  sectionId: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
  onDeleteContentItem: (id: string) => void;
}

const UpdateExperienceItemForm: React.FC<Props> = ({
  id,
  heading,
  location,
  subheading,
  startDate,
  endDate,
  contentById,
  sectionId,
  onSubmit,
  onCancelEdit,
  onDelete,
  onDeleteContentItem
}) => {

  return (
    <ExperienceItemForm
      title="Edit Experience Item"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      onDeleteContentItem={onDeleteContentItem}
      initialFormState={{ 
        id, 
        heading,
        location,
        subheading,
        startDate,
        endDate,
        content: contentById,
        sectionId: sectionId,
      }}
    />
  );
}

export default UpdateExperienceItemForm;
