import React from 'react';
import PropTypes from 'prop-types';
import './contactItem.scss';
import locationImage from '../../../assets/icons/location.svg';

const ContactItem = ({
  id,
  city,
  street,
  latitude,
  longitude,
  type,
  setCurrentCamp,
  setMapZoom,
}) => {
  const showCampOnMap = () => {
    setCurrentCamp({
      id,
      city,
      street,
      latitude,
      longitude,
      type,
      setCurrentCamp,
    });
    setMapZoom(14);
  };
  return (
    <div className="contacts-item__container">
      <button
        type="button"
        className="contacts-item__city"
        onClick={showCampOnMap}
      >
        <img src={locationImage} alt="location" />
        <span>{city}</span>
      </button>
      <div className="contacts-item__contacts-container">
        <div className="contacts-item__street">{street}</div>
        <div className="contacts-item__telephone-number">tel.+375331111111</div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setCurrentCamp: PropTypes.func.isRequired,
  setMapZoom: PropTypes.func.isRequired,
};

export default ContactItem;
