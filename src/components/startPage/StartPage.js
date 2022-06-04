import React from 'react';
import SelectACampForm from './SelectACampForm/SelectACampForm';
import './startPage.scss';
import Footer from './startPageFooter/startPageFooter';
import StartPageHeader from './startPageHeader/StartPageHeader';
import GallerySlider from '../common/GallerySlider/GallerySlider';

function StartPage() {
  return (
    <>
      <div className="start-page-content__wrap">
        <StartPageHeader />
        <div className="start-page-content__container">
          <div className="start-page-content__why-us">
            <h2 className="start-page-content__promo">Why Us</h2>
            <div className="start-page-content__frame">
              Welcome to our full-service hotel for dogs and cats featuring 24/7
              safety-certified associates and an on-call veterinarian. PetsHotel
              is a great peace-of-mind alternative where cats can rest easy in
              comfortable quarters and dogs can enjoy playtime, salon services,
              training classes, and more!
            </div>
            <h2 className="start-page-content__promo">Gallery</h2>
            <GallerySlider />
          </div>
          <div className="start-page-content__middle-stroke" />
          <SelectACampForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default StartPage;
