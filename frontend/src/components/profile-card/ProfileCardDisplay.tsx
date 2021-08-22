import React from 'react';
import { TitleBlock, Button } from '../ui';

import './ProfilePage.scss';


interface Props { 
  firstName: string;
  lastName: string;
  onEdit: () => void;
};

const ProfileCardDisplay: React.FC<Props> = ({
  firstName,
  lastName,
  onEdit
}) => {

  return (
    <>
      <TitleBlock text="Profile">
        <Button
          text="Edit"
          onClick={onEdit}
          info
        />
      </TitleBlock>

      <div className="page__content">
        <div className="list-item">
          <span>First Name: </span>
          <span>{firstName}</span>
        </div>
        <div className="list-item">
          <span>Last Name: </span>
          <span>{lastName}</span>
        </div>
      </div>
    </>
  );
}

export default ProfileCardDisplay;
