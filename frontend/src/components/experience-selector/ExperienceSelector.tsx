import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';

import ContactSelector from './ContactSelector';
import SectionSelector from './SectionSelector';

import './ExperiencePicker.scss';


const mapState = (state: RootState) => ({
  experienceSections: state.entity.experienceSection,
  contactIds: state.entity.contactItem.allIds,
  selectedItemIds: state.entity.resume,
  selectedSectionIds: state.entity.resume
})

const mapDispatch = { };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;


interface Props extends PropsFromRedux {
  resumeId: string;
}

const ExperienceSelector: React.FC<Props> = ({
  resumeId,
  experienceSections,
  contactIds,
  selectedItemIds,
  selectedSectionIds
}) => {
  const getInitialSection = () => {
    if (experienceSections.allIds.length > 0)
      return experienceSections.allIds[0]
    else
      return 'contact';
  }

  const [currSection, setCurrSection] = useState<string>(getInitialSection());

  return (
    <div className="experience-selector">
      <div className="experience-picker__drawer">
        <div
          className={`experience-picker__drawer-item ${currSection === 'contact' ? 'active' : ''}`}
          onClick={() => setCurrSection('contact')}>
          Contact Items
        </div>

        {experienceSections.allIds.map((id: string) => (
          <div
            key={id}
            className={`experience-picker__drawer-item ${currSection === id ? 'active' : ''}`}
            onClick={() => setCurrSection(id)}>
            {experienceSections.byId[id].title}
          </div>
        ))}
      </div>

      <div className="experience-picker__display">
        {(currSection === 'contact')
          ?
          <>
            <h3 className="display__title">
              Contact Items
            </h3>
            <div className="selector-container">
              {contactIds.map((id: string) => (
                <ContactSelector
                  key={id}
                  id={id}
                  resumeId={resumeId}
                />
              ))}
            </div>
          </>
          :
          <SectionSelector
            sectionId={currSection}
            resumeId={resumeId}
          />
        }
      </div>
    </div>
  );
}

export default connector(ExperienceSelector);
