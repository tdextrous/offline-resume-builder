import React from 'react';

import { Button } from '../ui';
import ExperienceContent from './ExperienceContent';
import { convertDateToString } from '../../utils';

import './ResumeItem.scss';


interface Props {
  id: string;
  heading: string;
  subheading: string;
  location: string;
  startDate: Date;
  endDate: Date;
  content: string[];
  onEdit: () => void;
}

const ExperienceItemCardDisplay: React.FC<Props> = ({
  id,
  heading,
  subheading,
  location,
  startDate,
  endDate,
  content,
  onEdit
}) => {
  return (
    <div className={`resume-item__wrapper`}>
      <div className="resume-item">
        <div className="container heading__container">
          <span className="subheading">{subheading}</span>
          {subheading && " - "}
          <span className="heading">{heading}</span>
        </div>
        <div className="container">
          <span className="location">{location}</span>
        </div>
        <div className="container">
          <span className="date">
            {convertDateToString(startDate)}
          </span>
          {startDate && ' – '}
          <span className="date">
            {convertDateToString(endDate)}
          </span>
        </div>
        <ul>
          {content.map((item) => (
            <ExperienceContent
              key={item}
              id={item}
            />
          ))}
        </ul>
        <div className="resume-item__button-bar">
          <Button
            text="Edit"
            onClick={onEdit}
            info
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceItemCardDisplay;
