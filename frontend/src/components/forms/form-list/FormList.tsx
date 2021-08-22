import React, { useState, useEffect } from 'react';
import { Guid } from 'guid-typescript';

import { Button } from '../../ui';

import './FormList.scss';


interface Props<T> {
  fieldName: string;
  label: string;
  value: Record<string, T>;
  onChange: (e: any) => void;
  onDelete: (id: string) => void;
  initialFormItemState: T;
  render: (
    formState: T, 
    handleChange: (e: any) => void,
    handleDelete: (e: any) => void
  ) => React.ReactNode;
};

/**
 * This component is for putting a list of forms as an input to
 * another form element, like ModalForm.
 *
 * The main use case is for one-to-many relationships, here it
 * is used for the ExperienceItem -> ExperienceContent case.
 *
 * Behaviors:
 *   - 
 */
const FormList = <T,>({
  fieldName,
  label,
  value,
  onChange,
  onDelete,
  initialFormItemState,
  render,
}: Props<T>) => {
  const [formState, setFormState] = useState<Record<string, T>>(value);

  const handleChangeForId = (id: string) => ({ target }: { target: HTMLInputElement }) => {
    setFormState((currFormState) => ({
      ...currFormState,
      [id]: {
        ...currFormState[id],
        [target.name]: target.value,
      }
    }))
  }

  const handleChangeForParent = (newValue: Record<string, T>) => {
    const formEvtTarget = {
      name: fieldName,
      value: newValue
    }
    onChange({ target: formEvtTarget });
  }

  // When state is updated in this component, add 
  // callback to update parent state.
  useEffect(() => {
    handleChangeForParent(formState);
  }, [formState])


  const handleAddFormItem = (evt: any) => {
    evt.preventDefault();
    const newId = Guid.raw();
    const newValue = {
      ...initialFormItemState,
      id: newId
    }
    setFormState((currFormState) => ({
      ...currFormState,
      [newId]: newValue
    }))
  }

  const handleDeleteFormItem = (id: string) => (evt: any) => {
    evt.preventDefault();

    // Update local form state
    const { [id]: _deleted, ...newFormState } = formState;
    setFormState(newFormState)

    // Update redux state
    onDelete(id);
  }

  return (
    <>
      <label htmlFor={fieldName} className="label">
        {label}
      </label>
      {Object.keys(value).map((id: string) => 
        render(formState[id], handleChangeForId(id), handleDeleteFormItem(id))
      )}
      <div className="form-list__button-container">
        <Button
          text="Add Item"
          onClick={(e: any) => handleAddFormItem(e)}
          plus
        />
      </div>
    </>
  );
}

export default FormList;
