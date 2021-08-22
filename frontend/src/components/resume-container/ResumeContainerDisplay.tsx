import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';

import { TitleBlock, Button } from '../ui';
import ResumeCard from '../resume-card/ResumeCard';


interface OwnProps {
  onEdit: () => void;
}

const mapState = (state: RootState) => ({
  allResumeIds: state.entity.resume.allIds
});
const mapDispatch = { };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ResumeContainerDisplay: React.FC<Props> = ({
  allResumeIds,
  onEdit
}) => {

  return (
    <div>
      <TitleBlock text="My Resumes">
        <Button
          text="Add Resume"
          onClick={onEdit}
          light
          plus
        />
      </TitleBlock>
      <ul>
        {allResumeIds.map((id: string) => (
          <ResumeCard
            key={id}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
}

export default connector(ResumeContainerDisplay);
