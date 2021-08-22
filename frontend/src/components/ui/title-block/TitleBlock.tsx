import React from 'react';

import './TitleBlock.scss';


interface Props {
  text: string;
  children: React.ReactNode;
};

const TitleBlock: React.FC<Props> = ({
  text,
  children
}) => {
  return (
    <div className="title-block">
      <h2 className="title-block__title">{text}</h2>
      {children}
    </div>
  );
}

export default TitleBlock;
