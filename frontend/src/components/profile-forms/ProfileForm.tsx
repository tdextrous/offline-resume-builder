import React from 'react';

import { ModalForm, Input } from '../forms';

type ProfileFormData = {
  id: string;
  firstName: string;
  lastName: string;
}

interface Props {
  title: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: (id: string) => void;
  initialFormState?: ProfileFormData;
}

const ProfileForm: React.FC<Props> = ({
  title,
  onSubmit,
  onCancelEdit,
  onDelete,
  initialFormState
}) => {

  return (
    <ModalForm<ProfileFormData>
      title={title}
      onSubmit={onSubmit}
      onCancel={onCancelEdit}
      onDelete={onDelete}
      initialFormState={initialFormState}
      shouldShowDeleteButton={false}
      render={(profileForm, handleChange) => (
        <>
          <Input
            fieldName="firstName"
            type="text"
            label="First Name"
            value={profileForm.firstName}
            onChange={handleChange}
          />

          <Input
            fieldName="lastName"
            type="text"
            label="Last Name"
            value={profileForm.lastName}
            onChange={handleChange}
          />
        </>
      )} />
  );
}

export default ProfileForm;
