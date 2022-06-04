import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import Arrow from '../../../../assets/icons/arrow.png';

import MyPetBoardItem from './MyPetBoardItem';

const UserProfilePageMyPetBoard = ({ pets, isLoading }) => (
  <div className="userProfilePageMyPet">
    <div className="userProfilePageMyPet__container">
      <div className="userProfilePageMyPet__header">
        <p className="userProfilePageMyPet__header__title">My pets</p>
        <NavLink to="pets" className="userProfilePageMyPet__header__link">
          <p>See more</p>
          <img className="arrow" src={Arrow} alt="arrow" />
        </NavLink>
      </div>
      {isLoading ? (
        <div className="profile-spiner">
          <CircularProgress />
        </div>
      ) : (
        <>
          {pets.length === 0 ? (
            <div className="userProfilePage__empty-section">
              <p>NO PETS YET</p>
            </div>
          ) : (
            <div className="userProfilePageMyPet__content">
              {pets.map((pet) => (
                <MyPetBoardItem key={pet.id} pet={pet} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

UserProfilePageMyPetBoard.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      vet_pasport: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UserProfilePageMyPetBoard;
