import React from 'react';
import { convertDateToString } from '../../utils';

import ContentPreview from './ContentPreview';


interface Props {
  id: string;
  heading: string;
  location: string;
  subheading: string;
  startDate: Date;
  endDate: Date;
  content: any[];
}

const ItemPreview: React.FC<Props> = ({
  id,
  heading,
  location,
  subheading,
  startDate,
  endDate,
  content=[]
}) => {
  const startDateString = startDate; //convertDateToString(startDate);
    const endDateString = endDate;//convertDateToString(endDate);

  return (
    <div className="d-item__container">
      <div className="d-item__header__container">
        <div className="d-item__header__left">
          {heading &&
            <h3 className="d-item__heading">
              {heading}
            </h3>
          }
          {location &&
            <span className="d-item__location">
              , {location}
            </span>
          }
        </div>


        <div className="d-item__header__right">
          {startDate &&
            <>
              <span className="d-item__start-date">
                {startDateString}
              </span>
              &mdash;
            </>
          }
          {endDate &&
            <span className="d-item__end-date">
              {endDateString}
            </span>
          }
        </div>
      </div>

      {subheading &&
        <p className="d-item__subheading">
          {subheading}
        </p>
      }

      <ul className="d-content__container">
        {content.map(item => (
          <ContentPreview
            key={item.id}
            id={item.id}
            content={item.content}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemPreview;
