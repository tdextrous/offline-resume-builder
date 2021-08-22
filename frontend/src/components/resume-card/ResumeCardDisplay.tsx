import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../ui';

import './ResumeCard.scss';
import './Card.scss';


interface Props {
  id: string;
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * TODO: Handle async resume download actions,
 * will probably have to add a saga that communicates
 * with python service.
 */
const ResumeCardDisplay: React.FC<Props> = ({
  id,
  title,
  onEdit,
  onDelete
}) => {

  return (
    <div className="card">
      <div className="card__content">
        <h3 className="resume-card__title">{title}</h3>
        {/* receivedAt && <p className="resume-card__detail">Last generated {getTimeDelta(new Date(receivedAt))}</p>*/}
      </div>

      {/*
      <div className="card__bottom-rail">
        <Button
          text={(isDownloading) ? "Loading..." : "Generate Resume"}
          onClick={() => requestResumeURL(resumePayload)}
          light
        />
        <a
          href={url}
          className={`button ${(url) ? '' : 'button--disabled'}`}>
          {url ? "Download" : "Not available"}
        </a>
      </div>
        */}

      <div className="card__button-container">
        {/* This is just a navlink, so the button doesn't have onclick function */}
        <Link to={`resumes/${id}`}>
          <Button
            text="Edit"
            onClick={() => {}}
            info
          />
        </Link>

        <Button
          text="Remove"
          onClick={onDelete}
          trash
        />
      </div>
    </div>
  );
}

export default ResumeCardDisplay;
