import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import './CantDeletePetMessage.scss';

const CantDeletePetMessage = ({ isOpen, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog className="cant-delete-pet" open={isOpen} onClose={handleClose}>
      <DialogContent>
        <p className="cant-delete-pet__content">
          This card is on active booking.
        </p>
        <p className="cant-delete-pet__content">
          You can’t delete it right now
        </p>
      </DialogContent>
      <div className="cant-delete-pet__actions">
        <button
          className="cant-delete-pet__go-back-btn"
          type="button"
          onClick={handleClose}
        >
          Go back
        </button>
      </div>
    </Dialog>
  );
};

CantDeletePetMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CantDeletePetMessage;
