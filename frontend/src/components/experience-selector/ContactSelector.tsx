import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectContactItem } from '../../redux/resume';

import { Checkbox } from '../ui';
import ItemSelectorDisplay from './ItemSelectorDisplay';


interface OwnProps {
  id: string;
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
  content: state.entity.contactItem.byId[props.id].content,
  selectedContactItems: state.entity.resume.byId[props.resumeId].contactItems
})
const mapDispatch = {
  selectContactItem
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ContactItemSelector: React.FC<Props> = ({
  id,
  resumeId,
  content,
  selectedContactItems,
  selectContactItem,
  parentValue,
  parentClicked,
  selectParent,
  children
}) => {
  const checkboxProps = { parentValue, parentClicked, selectParent, children };
  const isSelected = selectedContactItems.includes(id);

  return (
    <Checkbox
      {...checkboxProps}
      selectInitialValue={isSelected}
      heading={content}
      onSelect={() => selectContactItem(resumeId, id)}
      display={ItemSelectorDisplay}
    />
  );
}

export default connector(ContactItemSelector);
