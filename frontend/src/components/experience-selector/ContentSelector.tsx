import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectExperienceContent } from '../../redux/resume';

import { Checkbox } from '../ui';
import ContentSelectorDisplay from './ContentSelectorDisplay';


interface OwnProps {
  contentId: string;
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
  content: state.entity.experienceContent.byId[props.contentId].content,
  selectedContent: state.entity.resume.byId[props.resumeId].content
})
const mapDispatch = {
  selectExperienceContent
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ContentSelector: React.FC<Props> = ({
  contentId,
  resumeId,
  content,
  selectedContent,
  selectExperienceContent,
  parentValue,
  parentClicked,
  selectParent,
  children
}) => {
  const checkboxProps = { parentValue, parentClicked, selectParent, children };
  const isSelected = selectedContent.includes(contentId);

  return (
    <Checkbox
      {...checkboxProps}
      selectInitialValue={isSelected}
      content={content}
      onSelect={() => selectExperienceContent(resumeId, contentId)}
      display={ContentSelectorDisplay}
    />
  );
}

export default connector(ContentSelector);
