import React, { useState } from 'react';
import ContactItemForm from './ContactItemForm';
import { Guid } from 'guid-typescript';


interface Props {
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
}

const AddContactItemForm: React.FC<Props> = ({
  onSubmit,
  onCancelEdit,
  onDelete
}) => {

  return (
    <ContactItemForm
      title="Add Contact Item"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      initialFormState={{ id: Guid.raw(), content: '' }}
      shouldShowDeleteButton={false}
    />
  );
}

export default AddContactItemForm;
