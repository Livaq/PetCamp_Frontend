import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import HeaderUserProfilePage from '../headerUserProfilePage/HeaderUserProfilePage';
import PetCard from './petCard/petCard';
import Footer from '../../startPage/startPageFooter/startPageFooter';
import AddPetDialog from './addPetDialog/addPetDialog';
import './myPetsPage.scss';
import getPets from '../../../controllers/clientControllers/pets/getPets';
import PetCardDeleteMenu from '../../common/petCardDeleteMenu/PetCardDeleteMenu';
import CantDeletePetMessage from '../../common/petCardDeleteMenu/CantDeletePetMessage';

const myPetsPage = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteMenuOpen, setDeleteMenuOpen] = useState(false);
  const [deletingPet, setDeletingPet] = useState('');
  const [hasActiveBookings, setActiveBookings] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  useEffect(() => {
    getPets(userId, 'ALL').then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        setPets(res.data.petsList);
      }
    });
  }, []);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const openDeleteMenu = () => {
    setDeleteMenuOpen(true);
  };
  const closeDeleteMenu = () => {
    setDeleteMenuOpen(false);
    setDeletingPet('');
  };

  return (
    <>
      <HeaderUserProfilePage />
      <div className="pets">
        <h2>My pets</h2>
        <div className="cards">
          {isLoading ? (
            <div className="spiner">
              <CircularProgress />
            </div>
          ) : (
            <div className="pets-cards">
              {pets.map((item) => (
                <PetCard
                  key={item.id}
                  setDeletingPet={setDeletingPet}
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  breed={item.breed}
                  gender={item.gender}
                  age={item.age}
                  sterilized={item.sterilized}
                  vetPassport={item.vet_pasport}
                  info={item.info}
                  openDeleteMenu={openDeleteMenu}
                />
              ))}
              <div className="add-pet">
                <button
                  className="add-pet-btn"
                  aria-label="add pet"
                  type="button"
                  onClick={() => setIsDialogOpen(true)}
                >
                  +
                </button>
                <p>Add a pet</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <AddPetDialog
        open={isDialogOpen}
        handleClose={closeDialog}
        setPets={setPets}
      />
      {isDeleteMenuOpen && (
        <PetCardDeleteMenu
          closeDeleteMenu={closeDeleteMenu}
          id={deletingPet}
          setPets={setPets}
          setActiveBookings={setActiveBookings}
        />
      )}
      <CantDeletePetMessage
        isOpen={hasActiveBookings}
        setOpen={setActiveBookings}
        closeDeleteMenu={closeDeleteMenu}
      />
    </>
  );
};

export default myPetsPage;
