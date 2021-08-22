import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';

import ContactItemCard from '../contact-item-card/ContactItemCard';
import { TitleBlock, Button } from '../ui';

import './Contact.scss';


const mapState = (state: RootState) => ({
  allContactItemIds: state.entity.contactItem.allIds
});
const mapDispatch = { };
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  onEdit: () => void;  // from ModalFormWrapper
}

const ContactItemContainerDisplay: React.FC<Props> = ({
  allContactItemIds,
  onEdit
}) => {
  return (
    <>
      <TitleBlock text="Contact Items">
        <Button
          text="Add Contact Item"
          onClick={onEdit}
          light
          plus
        />
      </TitleBlock>

      <div className="contact-item__container">
        {allContactItemIds.map((contactItemId: string) => (
          <ContactItemCard
            key={contactItemId}
            id={contactItemId}
          />
        ))}
      </div>
    </>
  );
}

export default connector(ContactItemContainerDisplay);
