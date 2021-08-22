import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Button.scss';


interface Props {
  text: string;
  onClick: (e: any) => void;
  trash?: boolean;
  info?: boolean;
  light?: boolean;
  cancel?: boolean;
  plus?: boolean;
};

const Button: React.FC<Props> = ({
  text,
  onClick,
  trash,
  info,
  light,
  cancel,
  plus
}) => {
  let className = "button";
  let iconName: IconProp = null;

  if (trash) {
    className += " button--danger";
  } else if (info) {
    className += " button--info";
  } else if (light) {
    className += " button--light";
  } else if (cancel) {
    className += " button--danger";
  }

  if (trash) {
    iconName = "trash-alt";
  } else if (info) {
    iconName = "pen";
  } else if (plus) {
    iconName = "plus";
  } else if (cancel) {
    iconName = "times";
  }

  return (
    <button
      role="button"
      className={className}
      onClick={onClick}>
      {iconName && <FontAwesomeIcon icon={iconName} />}
      <span className="button__text">{text}</span>
    </button>
  );
}

export default Button;
