import React from 'react';

import ItemPreview from './ItemPreview';


interface Props {
  id: string;
  title: string;
  items: any[];
}

const SectionPreview: React.FC<Props> = ({
  id,
  title,
  items=[]
}) => {

  return (
    <div className="d-section__container">
      <h2 className="d-section__heading">
        {title}
      </h2>

      {items.map(item => (
        <ItemPreview
          key={item.id}
          id={item.id}
          heading={item.heading}
          location={item.location}
          subheading={item.subheading}
          startDate={item.startDate}
          endDate={item.endDate}
          content={item.selectedContent}
        />
      ))}
    </div>
  );
}

export default SectionPreview;
