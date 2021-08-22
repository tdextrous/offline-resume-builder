import React, { useState } from 'react';
import Modal from '../modal/Modal';
import ConfirmDelete from '../confirm-delete/ConfirmDelete';


interface DisplayComponentProps {
  onEdit: () => void;
  [key: string]: any;  // handle any other props
}

interface FormComponentProps {
  onSubmit: (evt: any, submitPayload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
  [key: string]: any;  // remaining props
}

interface Props {
  display: React.FC<DisplayComponentProps>;
  form: React.FC<FormComponentProps>;
  onSubmit: (submitPayload: any) => void;
  onDelete?: () => void;
  [key: string]: any;  // other props
}

const ModalFormWrapper: React.FC<Props> = ({
  display,
  form,
  onSubmit,
  onDelete=()=>{},
  ...otherProps
}) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handleEdit = () => {
    setIsFormModalOpen(true);
  }

  const handleCancelEdit = () => {
    setIsFormModalOpen(false);
  }

  const handleSubmit = (evt: any, payload: any) => {
    evt.preventDefault();
    setIsFormModalOpen(false);
    onSubmit(payload);
  }

  const handleDelete = () => {
    setIsFormModalOpen(false);
    setIsDeleteModalOpen(true);
  }

  const handleConfirmDelete = () => {
    onDelete()
  }

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setIsFormModalOpen(true);
  }

  // Rename passed prop-components with capitals.
  const DisplayComponent = display;
  const FormComponent = form;

  return (
    <>
      <DisplayComponent 
        {...otherProps}
        onEdit={handleEdit}
      />

      {isFormModalOpen &&
        <FormComponent
          {...otherProps}
          onSubmit={handleSubmit}
          onCancelEdit={handleCancelEdit}
          onDelete={handleDelete}
        />
      }

      {isDeleteModalOpen && 
        <Modal>
          <ConfirmDelete
            onDelete={handleConfirmDelete}
            onCancelDelete={handleCancelDelete}
          />
        </Modal>
      }
    </>
  );
}

export default ModalFormWrapper;
