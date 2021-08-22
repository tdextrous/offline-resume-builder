import React from 'react';


interface Props {
  selected: boolean;
  onClick: () => void;
  title: string;
}

const SectionSelectorDisplay: React.FC<Props> = ({
  selected,
  onClick,
  title
}) => {
  const handleSelect = () => {
    if (selected) onClick();
  }

  return (
    <div className="display__heading">
      <h3 className="display__title">
        {title}
      </h3>
      <span
        className="display__clear-btn"
        onClick={handleSelect}>
        Clear section
      </span>
    </div>
  );
}

export default SectionSelectorDisplay;
