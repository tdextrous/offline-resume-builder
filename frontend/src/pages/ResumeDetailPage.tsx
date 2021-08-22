import React from 'react';

import ResumeTitleCard from '../components/resume-title-card/ResumeTitleCard';
import ExperienceSelector from '../components/experience-selector/ExperienceSelector';
import ResumePreview from '../components/resume-preview/ResumePreview';


interface Props {
  resumeId: string;
}

const ResumeDetailPage: React.FC<Props> = ({
  resumeId
}) => {

  return (
    <div className="experience-picker">
      <div className="experience-picker__heading">
        <ResumeTitleCard resumeId={resumeId} />
      </div>

      <div className="experience-picker__content">
        <div className="experience-picker__wrapper">
          <ExperienceSelector resumeId={resumeId} />
        </div>

        <div className="resume-template__wrapper">
          <ResumePreview resumeId={resumeId} />
        </div>
      </div>
    </div>
  );
}

export default ResumeDetailPage;
