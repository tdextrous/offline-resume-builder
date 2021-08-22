import React from 'react';

import { ModalForm, Input } from '../forms';

type ContactItemFormData = {
  id: string,
  content: string,
}

interface Props {
  title: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: (id: string) => void;
  initialFormState?: ContactItemFormData;
  shouldShowDeleteButton?: boolean;
}

const ContactItemForm: React.FC<Props> = ({
  title,
  onSubmit,
  onCancelEdit,
  onDelete,
  initialFormState,
  shouldShowDeleteButton=true
}) => {

  return (
    <ModalForm<ContactItemFormData>
      title={title}
      onSubmit={onSubmit}
      onCancel={onCancelEdit}
      onDelete={onDelete}
      initialFormState={initialFormState}
      shouldShowDeleteButton={shouldShowDeleteButton}
      render={(contactItemForm, handleChange) => (
        <Input
          fieldName="content"
          type="text"
          label="Contact Item"
          value={contactItemForm.content}
          onChange={handleChange}
        />
      )}/>
  );
}

export default ContactItemForm;
