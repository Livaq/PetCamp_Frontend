import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderNavigation from '../../common/headerNavigation/HeaderNavigation';
import DropDownMenu from '../../common/dropDownMenu/DropDownMenu';
import HeaderNavigationBurger from '../../common/HeaderNavigationBurger/HeaderNavigationBurger';
import './headerUserProfilePage.scss';
import Profile from '../../common/profile/Profile';

function HeaderUserProfilePage() {
  const matches = useMediaQuery('(max-width:1280px)');
  const userId = useSelector((state) => state.user.userId);
  const routeMatch = useRouteMatch('/booking');
  const history = useHistory();
  const bookHanle = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <>
      <div className="user-profile__header-wrapper">
        <div className="user-profile__header">
          <NavLink to="/" className="user-profile__header-logo">
            Pet Camp
          </NavLink>
          {matches ? (
            <div className="burger-nav-profile">
              <HeaderNavigationBurger />
            </div>
          ) : (
            <HeaderNavigation />
          )}
          {!routeMatch && (
            <button
              className="user-profile__header__reserve-button"
              type="submit"
              onClick={bookHanle}
            >
              BOOK
            </button>
          )}

          <div className="booking-pages__log-in-positioning">
            {!userId ? <Profile /> : <DropDownMenu />}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderUserProfilePage;
