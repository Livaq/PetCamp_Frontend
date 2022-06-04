import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import catType from '../../../../assets/images/catType.jpeg';
import dogType from '../../../../assets/images/dogType.jpeg';
import { addPet, removePet } from '../../../../slices/bookingFormSlice';
import PetInfoComponent from './PetInfo';
import PetType from '../../../../common/PetType';

const Pet = ({ pet }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const quantity = useSelector((state) => state.bookingForm.booking.quantity);
  const selectedPets = useSelector((state) => state.bookingForm.pets);

  const changeHandle = () => {
    setChecked((state) => !state);
    if (checked !== true) {
      dispatch(addPet(pet));
    } else {
      dispatch(removePet(pet));
    }
  };

  return (
    <div className="pets-booking-item">
      <img
        src={pet.type.toLowerCase() === PetType.cat ? catType : dogType}
        alt="Cat"
        className="pets-booking-item_img"
      />
      <PetInfoComponent pet={pet} />
      <div className="pet-select">
        <Checkbox
          checked={checked}
          onChange={changeHandle}
          disabled={
            parseInt(quantity, 10) === selectedPets.length &&
            !selectedPets.find((elem) => elem.id === pet.id)
          }
        />
      </div>
    </div>
  );
};

Pet.propTypes = {
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

export default Pet;
