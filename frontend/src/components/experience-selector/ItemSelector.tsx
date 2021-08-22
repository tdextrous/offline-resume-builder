import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { getExperienceContentIdsFromItemId } from '../../redux/experience-content';
import { selectExperienceItem } from '../../redux/resume';

import { Checkbox } from '../ui';
import ItemSelectorDisplay from './ItemSelectorDisplay';
import ContentSelector from './ContentSelector';


interface OwnProps {
  itemId: string;
  resumeId: string;
  [key: string]: any;
  /*
  parentValue: boolean;
  parentClicked: boolean;
  selectParent: () => void;
  children: React.ReactNode;
   */
}

const mapState = (state: RootState, props: OwnProps) => ({
  heading: state.entity.experienceItem.byId[props.itemId].heading,
  relatedContent: getExperienceContentIdsFromItemId(state, { id: props.itemId }),
  selectedItems: state.entity.resume.byId[props.resumeId].items
})
const mapDispatch = {
  selectExperienceItem
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ItemSelector: React.FC<Props> = ({
  itemId,
  resumeId,
  heading,
  relatedContent,
  selectedItems,
  selectExperienceItem,
  parentValue,
  parentClicked,
  selectParent,
  children
}) => {
  const checkboxProps = { parentValue, parentClicked, selectParent, children };
  const isSelected = selectedItems.includes(itemId);

  return (
    <Checkbox
      {...checkboxProps}
      selectInitialValue={isSelected}
      heading={heading}
      onSelect={() => selectExperienceItem(resumeId, itemId)}
      display={ItemSelectorDisplay}>
      {relatedContent.map((contentId: string) => (
        <ContentSelector
          key={contentId}
          contentId={contentId}
          resumeId={resumeId}
        />
      ))}
    </Checkbox>
  );
}

export default connector(ItemSelector);
