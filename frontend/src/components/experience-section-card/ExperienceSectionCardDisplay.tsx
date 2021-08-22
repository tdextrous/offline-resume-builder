import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui';
import ExperienceItemContainer from '../experience-item-container/ExperienceItemContainer';

import './ResumeSection.scss';


interface Props {
  id: string;
  title: string;
  items: string[];
  onEdit: () => void;
}

const ExperienceSectionCardDisplay: React.FC<Props> = ({
  id,
  title,
  items,
  onEdit
}) => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="resume-section">
      <div className="resume-section__title-container">
        <div
          className={`resume-section__chevron${isCollapsed ? '' : ' is-rotated'}`}
          onClick={() => setIsCollapsed(!isCollapsed)}>
          <FontAwesomeIcon icon="chevron-right" />
        </div>

        <h3 className="resume-section__title">
          {title}
        </h3>

        <Button
          text="Edit"
          onClick={onEdit}
          info
        />
      </div>

      <div className={`resume-item__container${isCollapsed ? ' hidden' : ''}`}>
        <ExperienceItemContainer sectionId={id} />
      </div>
    </div>
  );
}

export default ExperienceSectionCardDisplay;
