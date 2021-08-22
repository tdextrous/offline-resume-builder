import React from 'react';

import { ModalForm, Input, DateInput, FormList } from '../forms';
import { Button } from '../ui';

import './ResumeItemForm.scss';


type ExperienceContentFormData = {
  id: string;
  content: string;
  itemId: string;
}

type ExperienceItemFormData = {
  id: string,
  heading: string,
  subheading: string,
  location: string,
  startDate: Date,
  endDate: Date,
  content: Record<string, ExperienceContentFormData>,
  sectionId: string,
}

interface Props { 
  title: string;
  onSubmit: (evt: any, submitPayload: any) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
  onDeleteContentItem: (id: string) => void;
  initialFormState?: ExperienceItemFormData;
  shouldShowDeleteButton?: boolean;
};

const ExperienceItemForm: React.FC<Props> = ({
  title,
  onSubmit,
  onCancelEdit,
  onDelete,
  onDeleteContentItem,
  initialFormState,
  shouldShowDeleteButton
}) => {

  return (
    <ModalForm<ExperienceItemFormData>
      title={title}
      onSubmit={onSubmit}
      onCancel={onCancelEdit}
      onDelete={onDelete}
      initialFormState={initialFormState}
      shouldShowDeleteButton={shouldShowDeleteButton}
      render={(formState, handleChange) => (
        <>
          <Input 
            fieldName="heading"
            label="Heading"
            type="text"
            value={formState.heading}
            onChange={handleChange}
          />

          <Input 
            fieldName="location"
            label="Location"
            type="text"
            value={formState.location}
            onChange={handleChange}
          />

          <Input
            fieldName="subheading"
            label="Subheading"
            type="text"
            value={formState.subheading}
            onChange={handleChange}
          />

          <div className="flex-horizontal">
            <DateInput
              fieldName="startDate"
              label="Start Date"
              value={formState.startDate}
              onChange={handleChange}
            />

            <DateInput
              fieldName="endDate"
              label="End Date"
              value={formState.endDate}
              onChange={handleChange}
            />
          </div>

          <FormList<ExperienceContentFormData>
            fieldName="content"
            label="Content"
            value={formState.content}
            onChange={handleChange}
            onDelete={onDeleteContentItem}
            initialFormItemState={{ id: '', content: '', itemId: formState.id }}
            render={(formItemState, handleItemChange, handleItemDelete) => (
              formItemState && 
              <div className="text-input__button-group">
                <Input
                  fieldName="content"
                  label=""
                  type="text"
                  value={formItemState.content}
                  onChange={handleItemChange}
                />
                <Button
                  text=""
                  onClick={(e: any) => handleItemDelete(e)}
                  trash
                />
              </div>
            )}
          />
        </>
      )}
    />
  );
}

export default ExperienceItemForm;
