import React from 'react';
import Header from '../../common/header/Header';

import './startPageHeader.scss';

function StartPageHeader() {
  return (
    <div className="start-page__header-block">
      <div className="content">
        <div className="header-block__text-block">
          <h1>Pet Camp</h1>
          <p className="slogan">The best stay while you’re away</p>
        </div>
        <Header />
      </div>
    </div>
  );
}

export default StartPageHeader;
