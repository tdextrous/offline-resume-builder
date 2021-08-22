// LEGACY NOTE: Previously named <MyContactItemContainer />
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addContactItem } from '../../redux/contact-item';

import { ModalFormWrapper } from '../ui';
import ContactItemContainerDisplay from './ContactItemContainerDisplay';
import AddContactItemForm from '../contact-item-forms/AddContactItemForm';


const mapState = () => ({})

const mapDispatch = {
  addContactItem
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;


const ContactItemContainer: React.FC<PropsFromRedux> = ({
  addContactItem
}) => {

  const handleSubmit = (submitPayload: any) => {
    addContactItem(submitPayload);
  }

  return (
    <ModalFormWrapper
      display={ContactItemContainerDisplay}
      form={AddContactItemForm}
      onSubmit={handleSubmit}
      onDelete={() => {}}
    />
  );
}


export default connector(ContactItemContainer);
