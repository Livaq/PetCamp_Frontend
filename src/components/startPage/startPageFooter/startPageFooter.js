import React from 'react';
import { NavLink } from 'react-router-dom';
import facebookIcon from '../../../assets/icons/facebook.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import googlePlayIcon from '../../../assets/icons/google-play.png';
import './startPageFooter.scss';

function Footer() {
  return (
    <div className="start-page-footer__positioning">
      <div className="start-page-footer__wrap">
        <div className="start-page-footer__container">
          <NavLink to="/agreement" className="start-page-footer__agreement">
            Client Agreement
          </NavLink>
          <div className="start-page-footer__logo-container">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="facebook noreferrer"
            >
              <img
                src={facebookIcon}
                alt="facebook"
                className="start-page-footer__logo"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagramIcon}
                alt="instagram"
                className="start-page-footer__logo"
              />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noreferrer">
              <img
                src={googlePlayIcon}
                alt="google play"
                className="start-page-footer__logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
