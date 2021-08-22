import React, { useState } from 'react';
import ContactItemForm from './ContactItemForm';


interface Props {
  id: string;
  content: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
}

const UpdateContactItemForm: React.FC<Props> = ({
  id,
  content,
  onSubmit,
  onCancelEdit,
  onDelete
}) => {

  return (
    <ContactItemForm
      title="Edit Contact Item"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      initialFormState={{ id, content }}
    />
  );
}

export default UpdateContactItemForm;
