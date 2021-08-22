import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Modal } from '../../ui';

import './ModalForm.scss';


interface Props<T> {
  title: string;
  onSubmit: (evt: any, submitPayload: any) => void;
  onCancel: () => void;
  onDelete?: (id: string) => void;
  shouldShowDeleteButton?: boolean;
  initialFormState?: T;
  render: (
    state: T, 
    handleStateChange: (e: any) => void
  ) => React.ReactNode;
}

const ModalForm = <T,>({
  title,
  onSubmit,
  onCancel,
  onDelete,
  render,
  shouldShowDeleteButton=true,
  initialFormState,
}: Props<T>) => {
  const [formState, setFormState] = useState({ ...initialFormState });

  const handleChange = ({ target }: { target: HTMLInputElement; }) => {
    setFormState((currFormData) => ({
      ...currFormData,
      [target.name]: target.value,
    }))
  }

  return (
    <Modal>
      <form className="form--modal">
        <div className="form--modal__title-block">
          <h2>{title}</h2>
          <div className="form--modal__cancel"
            onClick={onCancel}>
            <FontAwesomeIcon icon="times" />
          </div>
        </div>

        <div className="form--modal__content">
          {render(formState, handleChange)}
        </div>

        <div className="form--modal__button-bar">
          <Button
            text="Save"
            onClick={(e: any) => onSubmit(e, formState)}
            light
            plus
          />

          {shouldShowDeleteButton &&
            <Button
              text="Delete"
              onClick={onDelete}
              trash
            />
          }
        </div>
      </form>
    </Modal>
  );
}

export default ModalForm;
