import React from 'react';
import { connect } from 'react-redux';
import { downloadResumePdf } from '../../redux/resume';

import { TitleBlock, Button } from '../ui';


interface OwnProps {
  id: string;
  title: string;
  onEdit: () => void;
}

const mapState = () => ({});
const mapDispatch = {
  downloadResumePdf
}
const connector = connect(mapState, mapDispatch);

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;
type Props = OwnProps & StateProps & DispatchProps;

const ResumeTitleCardDisplay: React.FC<Props> = ({
  id,
  title,
  onEdit,
  downloadResumePdf,
}) => {
  const handleDownload = () => {
    console.log('handleDownload Clicked');
    downloadResumePdf(id);
  }

  return (
    <TitleBlock text={title}>
      <Button
        text="Edit Resume"
        onClick={onEdit}
        info
      />
      <Button
        text="Download Resume"
        onClick={handleDownload}
        light
      />
    </TitleBlock>
  );
}

export default connector(ResumeTitleCardDisplay);
