// LEGACY NOTE: Used to be component <Resume />
import React from 'react';

import ContactItemContainer from '../components/contact-item-container/ContactItemContainer'; 
import ExperienceSectionContainer from '../components/experience-section-container/ExperienceSectionContainer';

interface Props { }

const ExperiencePage: React.FC<Props> = ({
}) => {
  return (
    <div className="page">
      <ContactItemContainer />
      <ExperienceSectionContainer />
    </div>
  );
}

export default ExperiencePage;
