import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateContactItem, removeContactItem } from '../../redux/contact-item';

import { ModalFormWrapper } from '../ui';
import ContactItemDisplay from './ContactItemDisplay';
import UpdateContactItemForm from '../contact-item-forms/UpdateContactItemForm';


interface OwnProps {
  id: string;
}

const mapState = (state: RootState, ownProps: OwnProps) => ({
  content: state.entity.contactItem.byId[ownProps.id].content
});

const mapDispatch = {
  updateContactItem,
  removeContactItem
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps & PropsFromRedux;

const ContactItemCard: React.FC<Props> = ({
  updateContactItem,
  removeContactItem,
  ...props
}) => {
  const handleSubmit = (submitPayload: any) => {
    updateContactItem(submitPayload);
  }

  const handleDelete = () => {
    const contactItemId = props.id;
    removeContactItem(contactItemId);
  }

  return (
    <ModalFormWrapper
      display={ContactItemDisplay}
      form={UpdateContactItemForm}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      {...props}
    />
  );
}

export default connector(ContactItemCard);
