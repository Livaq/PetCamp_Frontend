import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import getPets from '../../../../controllers/clientControllers/pets/getPets';
import Pet from '../Stage3/Pet';
import { clearPet } from '../../../../slices/bookingFormSlice';
import './selectPet.scss';
import AddPetDialog from '../../../clientPages/myPetsPage/addPetDialog/addPetDialog';

const Stage2 = ({ prev, next }) => {
  const dispatch = useDispatch();
  const [pets, setPets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  const petType = useSelector((state) => state.bookingForm.booking.petType);
  const quantity = useSelector((state) => state.bookingForm.booking.quantity);
  const selectedPets = useSelector((state) => state.bookingForm.pets);
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    dispatch(clearPet());
    getPets(userId, petType).then((res) => {
      if (res.status === 200) {
        setPets(res.data.petsList);
        setLoading(false);
      } else {
        setPets([]);
      }
    });
  }, []);

  return (
    <>
      <div className="stage-container">
        <div className="booking-content_head">
          <h2 className="stage-title">Choose a pet</h2>
          <button type="button" className="go-back" onClick={prev}>
            Go back
          </button>
        </div>
        {isLoading ? (
          <div className="select-pet-bookings-load">
            <CircularProgress />
          </div>
        ) : (
          <div className="pets-booking">
            {pets.map((item) => (
              <div key={item.id}>
                <Pet pet={item} />
                <hr />
              </div>
            ))}
            <div className="add-pet">
              <button
                className="add-pet-btn"
                type="button"
                onClick={() => setIsDialogOpen(true)}
              >
                +
              </button>
              <p>Add a pet</p>
            </div>
          </div>
        )}
        <button
          type="button"
          className="next-stage"
          onClick={next}
          disabled={parseInt(quantity, 10) !== selectedPets.length}
        >
          Next
        </button>
      </div>
      <AddPetDialog
        open={isDialogOpen}
        handleClose={closeDialog}
        setPets={setPets}
      />
    </>
  );
};

Stage2.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Stage2;
