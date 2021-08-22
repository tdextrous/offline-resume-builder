import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';

import { Button, TitleBlock } from '../ui';
import ExperienceSectionCard from '../experience-section-card/ExperienceSectionCard';

import './Experience.scss';


const mapState = (state: RootState) => ({
  allExperienceSectionIds: state.entity.experienceSection.allIds
});
const mapDispatch = { };
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux { 
  onEdit: () => void;
};

const ExperienceSectionContainerDisplay: React.FC<Props> = ({
  allExperienceSectionIds,
  onEdit
}) => {

  return (
    <>
      <TitleBlock text="Experience">
        <Button
          text="Add Section"
          onClick={onEdit}
          light
          plus
        />
      </TitleBlock>

      <div className="resume-section__container">
        {allExperienceSectionIds.map((sectionId: string) => (
          <ExperienceSectionCard
            key={sectionId}
            id={sectionId}
          />
        ))}
      </div>
    </>
  );
}


export default connector(ExperienceSectionContainerDisplay);
