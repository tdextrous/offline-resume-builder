import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import type { RootState } from '../../redux/store';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.scss';


const mapState = (state: RootState) => ({
  firstName: state.entity.user.byId['1'].firstName,
  lastName: state.entity.user.byId['1'].lastName
});

const mapDispatch = { };

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Navbar: React.FC<PropsFromRedux> = ({
  firstName,
  lastName
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="navbar__container">
      <nav>
        <NavLink
          to="/experience"
          className="nav__item"
          activeClassName="nav__item--selected">
          <div className="nav__item__icon">
            <FontAwesomeIcon icon="address-book" />
          </div>
          <p>
            Experience
          </p>
        </NavLink>

        <NavLink
          to="/resumes"
          className="nav__item"
          activeClassName="nav__item--selected">
          <div className="nav__item__icon">
            <FontAwesomeIcon icon="file-alt" />
          </div>
          <p>
            Resumes
          </p>
        </NavLink>
      </nav>
      <div className="bottom-info">
        <NavLink
          to="/profile"
          className="bottom-info__card"
          activeClassName="bottom-info__card selected">
          <div className="bottom-info__card__icon">
            <FontAwesomeIcon icon="user" />
          </div>
          <p className="bottom-info__card__text">
            {fullName} {/* Populate this with user data eventually */}
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default connector(Navbar);
