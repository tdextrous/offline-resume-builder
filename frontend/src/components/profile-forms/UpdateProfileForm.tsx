import React from 'react';
import ProfileForm from './ProfileForm';


interface Props {
  id: string;
  firstName: string;
  lastName: string;
  onSubmit: (evt: any, payload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
  onDeleteContentItem: (id: string) => void;
}

const UpdateProfileForm: React.FC<Props> = ({
  id,
  firstName,
  lastName,
  onSubmit,
  onCancelEdit,
  onDelete,
}) => {

  return (
    <ProfileForm
      title="Edit Profile"
      onSubmit={onSubmit}
      onCancelEdit={onCancelEdit}
      onDelete={onDelete}
      initialFormState={{
        id,
        firstName,
        lastName,
      }}
    />
  );
}

export default UpdateProfileForm;
