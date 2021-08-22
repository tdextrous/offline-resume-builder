import React from 'react';

import { Button } from '../ui';


interface Props {
  id: string;
  content: string;
  onEdit: () => void;
}

const ContactItemDisplay: React.FC<Props> = ({
  id,
  content,
  onEdit
}) => {
  return (
    <div className="contact-item">
      <h3>
        {content}
      </h3>
      <Button
        text="Edit"
        onClick={onEdit}
        info
      />
    </div>
  );
}

export default ContactItemDisplay;
