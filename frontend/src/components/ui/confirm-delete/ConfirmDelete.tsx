import React from 'react';
import Button from '../button/Button';

import './ConfirmDelete.scss';


interface Props {
  onDelete: () => void;
  onCancelDelete: () => void;
}

const ConfirmDelete: React.FC<Props> = ({
  onDelete,
  onCancelDelete
}) => {

  return (
    <div className="form--modal">
      <div className="form--modal__title-block">
        <h2>Confirm Delete</h2>
      </div>

      <div className="form--modal__content">
        Are you sure you want to delete this item? Changes cannot be undone.
      </div>

      <div className="form--modal__button-bar">
        <Button
          text="Cancel"
          onClick={onCancelDelete}
          light
          cancel
        />
        <Button
          text="Delete"
          onClick={onDelete}
          trash
        />
      </div>
    </div>
  );
}

export default ConfirmDelete;
