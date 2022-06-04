import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import './contactPage.scss';
import ContactItem from './ContactItem/ContactItem';

const CatCamps = ({ isLoading, catAddresses, setCurrentCamp, setMapZoom }) => (
  <div className="contact-page__contacts-container">
    <h3>For cats</h3>
    {isLoading ? (
      <div className="spiner">
        <CircularProgress />
      </div>
    ) : (
      <div className="contact-page__contacts-items-container">
        {catAddresses.map((item) => (
          <ContactItem
            key={item.id}
            id={item.id}
            city={item.city}
            street={item.street}
            latitude={item.latitude}
            longitude={item.longitude}
            type={item.type}
            setCurrentCamp={setCurrentCamp}
            setMapZoom={setMapZoom}
          />
        ))}
      </div>
    )}
  </div>
);

CatCamps.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  catAddresses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentCamp: PropTypes.func.isRequired,
  setMapZoom: PropTypes.func.isRequired,
};
export default CatCamps;
