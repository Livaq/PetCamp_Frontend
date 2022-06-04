import React from 'react';
import { NavLink } from 'react-router-dom';

const BookingPageHeader = () => (
  <ul className="header-links">
    <li>
      <NavLink to="/">About Us</NavLink>
    </li>
    <li>
      <NavLink to="/">Pricing & Conditions</NavLink>
    </li>
    <li>
      <NavLink to="/">Feedback</NavLink>
    </li>
    <li>
      <NavLink to="/">Contacts</NavLink>
    </li>
  </ul>
);

export default BookingPageHeader;
