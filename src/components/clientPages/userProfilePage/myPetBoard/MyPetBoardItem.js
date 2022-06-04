import React from 'react';
import PropTypes from 'prop-types';
import './MyPetBoardItem.scss';
import catType from '../../../../assets/images/catType.jpeg';
import dogType from '../../../../assets/images/dogType.jpeg';
import capitalizeFirstLetter from '../../../../services/stringFormat/capitalizeFirstLetter';
import PetType from '../../../../common/PetType';

function MyPetBoardItem({ pet }) {
  return (
    <div className="userProfilePageMyPet__item">
      <div className="userProfilePageMyPet__item-image">
        <img
          className="item-avatar"
          src={pet.type.toLowerCase() === PetType.cat ? catType : dogType}
          alt="avatar"
        />
      </div>
      <div className="userProfilePageMyPet__item-animal">
        <p className="userProfilePageMyPet__item-title">Cat/Dog</p>
        <p className="userProfilePageMyPet__item-data">
          {capitalizeFirstLetter(pet.type)}
        </p>
      </div>
      <div className="userProfilePageMyPet__item-name">
        <p className="userProfilePageMyPet__item-title">Name</p>
        <p className="userProfilePageMyPet__item-data">
          {capitalizeFirstLetter(pet.name)}
        </p>
      </div>
      <div className="userProfilePageMyPet__item-age">
        <p className="userProfilePageMyPet__item-title">Age</p>
        <p className="userProfilePageMyPet__item-data">{pet.age} years</p>
      </div>
      <div className="userProfilePageMyPet__item-gender">
        <p className="userProfilePageMyPet__item-title">Gender</p>
        <p className="userProfilePageMyPet__item-data">
          {pet.gender.toLowerCase()}
        </p>
      </div>
      <div className="userProfilePageMyPet__item-vacinated">
        <p className="userProfilePageMyPet__item-title">Vet passport</p>
        <p className="userProfilePageMyPet__item-data">№{pet.vet_pasport}</p>
      </div>
    </div>
  );
}

MyPetBoardItem.propTypes = {
  pet: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    vet_pasport: PropTypes.string.isRequired,
  }).isRequired,
};
export default MyPetBoardItem;
