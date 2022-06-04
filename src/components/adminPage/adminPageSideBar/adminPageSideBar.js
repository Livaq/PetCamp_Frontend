import React from 'react';
import { NavLink } from 'react-router-dom';

import './adminPageSideBar.scss';
import profileIcon from '../../../assets/icons/profile-icon.svg';
import reportsIcon from '../../../assets/icons/report-icon.svg';
import reservationsIcon from '../../../assets/icons/reservation-icon.svg';

function AdminPageSideBar() {
  return (
    <div className="admin-page-side-bar">
      <ul>
        <li>
          <NavLink to="/admin/profile" className="selected">
            <img src={profileIcon} alt="" /> My profile
          </NavLink>
          <NavLink to="/admin/reports">
            <img src={reportsIcon} alt="" /> Reports
          </NavLink>
          <NavLink to="/admin/reservations">
            <img src={reservationsIcon} alt="" /> Booking list
          </NavLink>
          <NavLink to="/admin/rooms">
            <img src={reservationsIcon} alt="" /> Rooms
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminPageSideBar;
