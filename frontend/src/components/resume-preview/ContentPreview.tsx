import React from 'react';


interface Props {
  id: string;
  content: string;
}

const ContentPreview: React.FC<Props> = ({
  id,
  content
}) => {

  return (
    <li className="d-content">
      {content}
    </li>
  );
}

export default ContentPreview;
