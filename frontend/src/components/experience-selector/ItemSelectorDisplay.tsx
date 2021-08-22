import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface Props {
  selected: boolean;
  heading: string;
  onClick: () => void;
}

const ItemSelectorDisplay: React.FC<Props> = ({
  selected,
  heading,
  onClick
}) => {
  const getIconName = (): string | string[] => {
    let iconName: string | string[] = ["far", "square"];
    if (selected) iconName = "check-square";
    return iconName
  }

  return (
    <div className="item-picker"
      onClick={onClick}>
      <div className="item-picker__checkbox">
        <FontAwesomeIcon icon={getIconName() as IconProp} />
      </div>
      <div className="item-picker__content">
        {heading}
      </div>
    </div>
  );
}

export default ItemSelectorDisplay;
