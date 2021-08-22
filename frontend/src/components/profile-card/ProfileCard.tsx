import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateUser } from '../../redux/user';

import { ModalFormWrapper } from '../ui';
import UpdateProfileForm from '../profile-forms/UpdateProfileForm';
import ProfileCardDisplay from './ProfileCardDisplay';



const mapState = (state: RootState) => ({
  ...state.entity.user.byId['1'],
});

const mapDispatch = {
  updateUser
};

const connector = connect(mapState, mapDispatch);

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;
type Props = StateProps & DispatchProps;


const ProfileCard: React.FC<Props> = ({
  updateUser,
  ...props
}) => {
  const handleSubmit = (submitPayload: any) => {
    updateUser(submitPayload);
  }

  const handleDelete = () => { }

  return (
    <ModalFormWrapper 
      display={ProfileCardDisplay}
      form={UpdateProfileForm}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      {...props}
    />
  );
}

export default connector(ProfileCard);
