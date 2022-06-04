import PropTypes from 'prop-types';
import React from 'react';
import capitalizeFirstLetter from '../../../../services/stringFormat/capitalizeFirstLetter';

const PetInfoComponent = ({ pet }) => {
  const { type, name, age, gender } = pet;
  return (
    <div className="pets-booking-item-info">
      <div className="pets-booking-item-info_item">
        <div className="param">Cat/Dog</div>
        <div className="value">{capitalizeFirstLetter(type)}</div>
      </div>
      <div className="pets-booking-item-info_item">
        <div className="param">Name</div>
        <div className="value">{capitalizeFirstLetter(name)}</div>
      </div>
      <div className="pets-booking-item-info_item">
        <div className="param">Age</div>
        <div className="value">{age}</div>
      </div>
      <div className="pets-booking-item-info_item">
        <div className="param">Gender</div>
        <div className="value">{gender.toLowerCase()}</div>
      </div>
    </div>
  );
};

PetInfoComponent.propTypes = {
  pet: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    vet_pasport: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    sterilized: PropTypes.string.isRequired,
    is_deleted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PetInfoComponent;
