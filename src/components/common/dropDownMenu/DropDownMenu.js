import React from 'react';
import NavbarDropdown from 'react-navbar-dropdown';
import { useHistory } from 'react-router-dom';
import './dropdownMenu.scss';
import { useDispatch } from 'react-redux';
import logOutIcon from '../../../assets/icons/logout.png';
import myProfileIcon from '../../../assets/icons/my-profile.png';
import myBookingIcon from '../../../assets/icons/my-booking.png';
import myPetIcon from '../../../assets/icons/my-pet.png';
import myReportsIcon from '../../../assets/icons/my-reports.png';
import mySettingsIcon from '../../../assets/icons/my-settings.png';
import Profile from '../profile/Profile';
import { clearUser } from '../../../slices/UserSlice';

function DropDownMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(clearUser());
    history.push('/');
  };
  return (
    <NavbarDropdown className="profile">
      <NavbarDropdown.Toggle>
        <NavbarDropdown.Open>
          <Profile />
        </NavbarDropdown.Open>
        <NavbarDropdown.Close>
          <Profile />
        </NavbarDropdown.Close>
      </NavbarDropdown.Toggle>
      <NavbarDropdown.CSSTransitionMenu className="dropdown-menu" timeout={200}>
        <NavbarDropdown.Item
          className="dropdown-menu-item"
          onClick={() => history.push('/client/profile')}
        >
          <div className="menu-item-icon">
            <img src={myProfileIcon} alt="my-profile icon" />
          </div>
          <div className="dropdown-menu-item__text">My profile</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="dropdown-menu-item"
          onClick={() => history.push('/client/bookings')}
        >
          <div className="menu-item-icon">
            <img src={myBookingIcon} alt="my-booking icon" />
          </div>
          <div className="dropdown-menu-item__text">My booking</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="dropdown-menu-item"
          onClick={() => history.push('/client/pets')}
        >
          <div className="menu-item-icon">
            <img src={myPetIcon} alt="my-pet icon" />
          </div>
          <div className="dropdown-menu-item__text">My pet</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="dropdown-menu-item"
          onClick={() => history.push('/client/reports')}
        >
          <div className="menu-item-icon">
            <img src={myReportsIcon} alt="my-reports icon" />
          </div>
          <div className="dropdown-menu-item__text">My reports</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="dropdown-menu-item"
          onClick={() => history.push('/client/mySettings')}
        >
          <div className="menu-item-icon">
            <img src={mySettingsIcon} alt="my-settings icon" />
          </div>
          <div className="dropdown-menu-item__text">My settings</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="dropdown-menu-item"
          onClick={logoutHandler}
        >
          <div className="menu-item-icon">
            <img src={logOutIcon} alt="logout icon" />
          </div>
          <div className="dropdown-menu-item__text">Log out</div>
        </NavbarDropdown.Item>
      </NavbarDropdown.CSSTransitionMenu>
    </NavbarDropdown>
  );
}

export default DropDownMenu;
