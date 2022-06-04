import React from 'react';
import PropTypes from 'prop-types';
import catImg from '../../../../assets/images/catType.jpeg';
import dogImg from '../../../../assets/images/dogType.jpeg';
import deleteButton from '../../../../assets/icons/delete-button.png';
import './petCard.scss';
import capitalizeFirstLetter from '../../../../services/stringFormat/capitalizeFirstLetter';
import PetType from '../../../../common/PetType';

const PetCard = ({
  setDeletingPet,
  id,
  name,
  type,
  breed,
  gender,
  age,
  sterilized,
  vetPassport,
  info,
  openDeleteMenu,
}) => {
  const handleDelete = () => {
    setDeletingPet(id);
    openDeleteMenu();
  };
  return (
    <div className="pets-card_item">
      <button
        type="button"
        className="pets-card_delete-btn-container"
        onClick={handleDelete}
      >
        <img
          src={deleteButton}
          alt="delete button"
          className="pets-card_delete-btn"
        />
      </button>
      <img
        className="pet-card_img"
        src={type.toLowerCase() === PetType.cat ? catImg : dogImg}
        alt="Cat"
      />
      <h3 className="pet-card_name">{capitalizeFirstLetter(name)}</h3>
      <div className="pet-card_prop">
        <span className="prop">Cat/Dog:</span>
        <span className="value">{capitalizeFirstLetter(type)}</span>
      </div>
      <div className="pet-card_prop">
        <span className="prop">Breed:</span>
        <span className="value">{capitalizeFirstLetter(breed)}</span>
      </div>
      <div className="pet-card_prop">
        <span className="prop">Gender:</span>
        <span className="value">{gender.toLowerCase()}</span>
      </div>
      <div className="pet-card_prop">
        <span className="prop">Age:</span>
        <span className="value">{age}</span>
      </div>
      <div className="pet-card_prop">
        <span className="prop">Sterilized:</span>
        <span className="value">{sterilized.toLowerCase()}</span>
      </div>
      <div className="pet-card_prop">
        <span className="prop">Vet Passport:</span>
        <span className="value">№{vetPassport}</span>
      </div>
      <div className="individual-info">
        <p>Individual notice (preferances):</p>
        <p className="individual-info-content">{info}</p>
      </div>
      <button className="change-btn" type="button">
        Change
      </button>
    </div>
  );
};

PetCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sterilized: PropTypes.string.isRequired,
  vetPassport: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  openDeleteMenu: PropTypes.func.isRequired,
  setDeletingPet: PropTypes.func.isRequired,
};

export default PetCard;
