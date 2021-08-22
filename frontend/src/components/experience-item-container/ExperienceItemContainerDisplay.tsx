import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { makeGetExperienceItemIdsFromSectionId} from '../../redux/experience-item';

import ExperienceItemCard from '../experience-item-card/ExperienceItemCard';
import { Button } from '../ui';


interface OwnProps {
  sectionId: string;
  onEdit: () => void;
}

const makeMapState = () => {
  const getExperienceItemIdsFromSectionId = makeGetExperienceItemIdsFromSectionId();
  const mapState = (state: RootState, ownProps: OwnProps) => ({
    allItemIds: getExperienceItemIdsFromSectionId(state, ownProps)
  });
  return mapState;
}
const mapDispatch = { };
const connector = connect(makeMapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ExperienceItemContainerDisplay: React.FC<Props> = ({
  sectionId,
  onEdit,
  allItemIds,
}) => {

  return (
    <>
      <Button
        text="Add Item"
        onClick={onEdit}
        light
        plus
      />
      {allItemIds.length === 0
      ?
      <span>It looks like there aren't any resume items here!</span>
      :
      allItemIds.map((itemId: string) => (
        <ExperienceItemCard
          key={itemId}
          id={itemId}
        />
      ))}
    </>
  );
}

export default connector(ExperienceItemContainerDisplay);
