import React from 'react';
import ResumeForm from './ResumeForm';

interface Props {
  id: string;
  title: string;
  contactItems: string[];
  sections: string[];
  items: string[];
  content: string[];
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
}

const UpdateResumeForm: React.FC<Props> = ({
  id,
  title,
  contactItems,
  sections,
  items,
  content,
  ...props
}) => {

  return (
    <ResumeForm
      title="Edit Resume"
      initialFormState={{
        id,
        title,
        contactItems,
        sections,
        items,
        content,
      }}
      {...props}
    />
  );
}

export default UpdateResumeForm;
