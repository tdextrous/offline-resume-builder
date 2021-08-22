import React from 'react';

import ProfileCard from '../components/profile-card/ProfileCard';


interface Props { };

const ProfilePage: React.FC<Props> = ({
}) => {

  return (
    <div className="page">
      <ProfileCard />
    </div>
  );
}

export default ProfilePage;
