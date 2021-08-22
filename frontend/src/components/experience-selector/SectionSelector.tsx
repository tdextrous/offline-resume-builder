import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { getExperienceItemIdsFromSectionId } from '../../redux/experience-item';
import { selectExperienceSection } from '../../redux/resume';

import { Checkbox } from '../ui';
import ItemSelector from './ItemSelector';
import SectionSelectorDisplay from './SectionSelectorDisplay';


interface OwnProps {
  sectionId: string;
  resumeId: string;
}

const mapState = (state: RootState, props: OwnProps) => ({
  title: state.entity.experienceSection.byId[props.sectionId].title,
  relatedItems: getExperienceItemIdsFromSectionId(state, props),
  selectedSections: state.entity.resume.byId[props.resumeId].sections
})
const mapDispatch = {
  selectExperienceSection
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const SectionSelector: React.FC<Props> = ({
  sectionId,
  resumeId,
  title,
  relatedItems,
  selectedSections,
  selectExperienceSection
}) => {
  const isSelected = selectedSections.includes(sectionId);

  return (
    <Checkbox
      selectInitialValue={isSelected}
      title={title}
      onSelect={() => selectExperienceSection(resumeId, sectionId)}
      additionalData={[sectionId]}
      display={SectionSelectorDisplay}>
      {relatedItems.map((itemId: string) => (
        <ItemSelector
          key={itemId}
          itemId={itemId}
          resumeId={resumeId}
        />
      ))}
    </Checkbox>
  );
}

export default connector(SectionSelector);
