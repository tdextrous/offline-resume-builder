import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface Props {
  selected: boolean;
  content: string;
  onClick: () => void;
}

const ContentSelectorDisplay: React.FC<Props> = ({
  selected,
  content,
  onClick
}) => {
  const getIconName = (): string | string[] => {
    let iconName: string | string[] = ["far", "square"];
    if (selected) iconName = "check-square";
    return iconName
  }

  return (
    <div className="content-picker"
      onClick={onClick}>
      <div className="content-picker__checkbox">
        <FontAwesomeIcon icon={getIconName() as IconProp} />
      </div>
      <div className="content-picker__content">
        {content}
      </div>
    </div>
  );
}

export default ContentSelectorDisplay;
