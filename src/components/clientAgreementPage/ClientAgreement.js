import React from 'react';
import './clientAgreement.scss';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../startPage/startPageFooter/startPageFooter';

const clientAgreement = () => (
  <div>
    <HeaderUserProfilePage />
    <div className="client-agreement__wrap">
      <div className="client-agreement__container">
        <h2>Client Agreement</h2>
        <div className="client-agreement__content-container">
          <div className="client-agreement__content-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              lorem tincidunt interdum posuere posuere ut elit hendrerit. Massa
              arcu non, enim sit ut eget. Et pharetra, non urna tincidunt eu.
              Cras pharetra ut dui vitae felis aliquam ullamcorper morbi mauris.
              Aliquam nam luctus morbi porttitor gravida volutpat sollicitudin.
              Congue quam quam mattis ultricies faucibus condimentum sed. Vel
              neque in a.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default clientAgreement;
