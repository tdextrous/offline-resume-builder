import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';


interface OwnProps {
  id: string;
}

const mapState = (state: RootState, ownProps: OwnProps) => ({
  content: state.entity.experienceContent.byId[ownProps.id].content
});
const mapDispatch = { };
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ExperienceContent: React.FC<Props> = ({
  id,
  content
}) => {
  return (
    <li>{content}</li>
  );
}

export default connector(ExperienceContent);
