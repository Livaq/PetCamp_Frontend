import React from 'react';
import PropTypes from 'prop-types';
import './petCardDeleteMenu.scss';
import deletePetController from '../../../controllers/clientControllers/pets/deletePet';

const PetCardDeleteMenu = ({
  closeDeleteMenu,
  id,
  setPets,
  setActiveBookings,
}) => {
  const deleteHandler = () => {
    deletePetController(id).then((res) => {
      if (res.status === 200) {
        setPets((pets) => pets.filter((pet) => pet.id !== id));
      } else {
        setActiveBookings(true);
      }
      closeDeleteMenu();
    });
  };
  return (
    <div className="pet-card-delete-menu__wrap">
      <div className="pet-card-delete-menu__background">
        <div className="pet-card-delete-menu__container">
          <div className="pet-card-delete-menu__content">
            <div className="pet-card-delete-menu__message">
              Do you want to delete a card?
            </div>
            <div className="pet-card-delete-menu__btn-container">
              <button
                type="button"
                className="pet-card-delete-menu__button accept-btn"
                onClick={deleteHandler}
              >
                Yes
              </button>
              <button
                type="button"
                className="pet-card-delete-menu__button decline-btn"
                onClick={closeDeleteMenu}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PetCardDeleteMenu.propTypes = {
  id: PropTypes.string.isRequired,
  closeDeleteMenu: PropTypes.func.isRequired,
  setPets: PropTypes.func.isRequired,
  setActiveBookings: PropTypes.func.isRequired,
};

export default PetCardDeleteMenu;
