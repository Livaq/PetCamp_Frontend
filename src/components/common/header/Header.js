import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import phoneIcon from '../../../assets/icons/call.png';

import './header.scss';
import Profile from '../profile/Profile';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import HeaderNavigationBurger from '../HeaderNavigationBurger/HeaderNavigationBurger';
import DropDownMenu from '../dropDownMenu/DropDownMenu';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const matches = useMediaQuery('(max-width:1280px)');
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    if (userId) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [userId]);

  return (
    <header>
      {matches ? <HeaderNavigationBurger /> : <HeaderNavigation />}
      <div className="header__phone-container">
        <div className="header__phone-icon">
          <img src={phoneIcon} alt="phone icon" />
        </div>
        <a
          type="tel"
          className="header__phone-number"
          href="tel:+375-29-1111111"
        >
          +375 29 1111111
        </a>
      </div>
      {!isLogin ? (
        <Profile />
      ) : (
        <div className="drop-down-menu-wrapper">
          <DropDownMenu />
        </div>
      )}
    </header>
  );
}

export default Header;
