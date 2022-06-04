import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerNavigation.scss';

function HeaderNavigation() {
  return (
    <div className="header__links">
      <NavLink className="header__link" to="/aboutUs">
        About Us
      </NavLink>
      <NavLink className="header__link" to="/pricing">
        Pricing & Conditions
      </NavLink>
      <NavLink className="header__link" to="/feedbacks">
        Feedback
      </NavLink>
      <NavLink className="header__link" to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
}

export default HeaderNavigation;
