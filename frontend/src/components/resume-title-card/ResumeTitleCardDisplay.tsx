import React from 'react';

import { TitleBlock, Button } from '../ui';

interface Props {
  title: string;
  onEdit: () => void;
}

const ResumeTitleCardDisplay: React.FC<Props> = ({
  title,
  onEdit
}) => {

  return (
    <TitleBlock text={title}>
      <Button
        text="Edit Resume"
        onClick={onEdit}
        info
      />
    </TitleBlock>
  );
}

export default ResumeTitleCardDisplay;
