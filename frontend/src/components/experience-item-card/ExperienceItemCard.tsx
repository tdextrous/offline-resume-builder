import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateExperienceItem, removeExperienceItem } from '../../redux/experience-item';
import { 
  addExperienceContent, 
  updateExperienceContent, 
  removeExperienceContent,
  getExperienceContentIdsFromItemId,
  getExperienceContentRecordsFromItemId,
} from '../../redux/experience-content';

import { ModalFormWrapper } from '../ui';
import ExperienceItemCardDisplay from './ExperienceItemCardDisplay';
import UpdateExperienceItemForm from '../experience-item-forms/UpdateExperienceItemForm';


type OwnProps = {
  id: string;
};

const mapState = (state: RootState, ownProps: OwnProps) => ({
  ...state.entity.experienceItem.byId[ownProps.id],
  content: getExperienceContentIdsFromItemId(state, ownProps),
  contentById: getExperienceContentRecordsFromItemId(state, ownProps)
});
const mapDispatch = {
  updateExperienceItem,
  removeExperienceItem,
  addExperienceContent, 
  updateExperienceContent,
  removeExperienceContent,
};
const connector = connect(mapState, mapDispatch);
type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;
type Props = OwnProps & StateProps & DispatchProps;

const ExperienceItemCard: React.FC<Props> = ({
  updateExperienceItem,
  removeExperienceItem,
  addExperienceContent, 
  updateExperienceContent,
  removeExperienceContent,
  ...props
}) => {
  // TODO: Check types on this.
  const handleSubmit = (submitPayload: any) => {
    const existingContentIds = props.content;
    const { content, ...expItemPayload } = submitPayload;
    updateExperienceItem(expItemPayload);

    // Submit content from form.

    // NOTE: While we are using 'updateExperienceContent' here,
    // a lot of the content objs could be new. Luckily the logic
    // for both of the action creators is identical so it doesn't matter.
    for (const contentId of Object.keys(content)) {
      const contentPayload = content[contentId];

      // Check if we should add a new one or update old one.
      if (existingContentIds.indexOf(contentId) === -1) {
        // Index dne, add the content item.
        addExperienceContent(contentPayload);
      } else {
        // Index was in array, update the element.
        updateExperienceContent(contentPayload);
      }
    }
  }

  const handleDelete = () => {
    const experienceItemId = props.id;
    const relatedContentIds = props.content
    removeExperienceItem(experienceItemId, relatedContentIds);
  }

  const handleContentDelete = (id: string) => {
    removeExperienceContent(id);
  }

  return (
    <ModalFormWrapper 
      display={ExperienceItemCardDisplay}
      form={UpdateExperienceItemForm}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onDeleteContentItem={handleContentDelete}
      {...props}
    />
  );
}

export default connector(ExperienceItemCard);
