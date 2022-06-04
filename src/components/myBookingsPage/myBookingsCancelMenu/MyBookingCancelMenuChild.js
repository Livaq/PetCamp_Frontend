import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function ChildModal({ handleParentClose, cancelBooking, action }) {
  const [isChildOpen, setChildOpen] = useState(false);
  const handleChildOpen = () => {
    cancelBooking();
    setChildOpen(true);
  };
  const handleChildClose = () => {
    setChildOpen(false);
    handleParentClose(false);
  };

  return (
    <div>
      <button
        type="button"
        className="bookings-card__button accept-btn"
        onClick={handleChildOpen}
      >
        Yes
      </button>
      <Modal
        hideBackdrop
        open={isChildOpen}
        onClose={handleChildClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="my-bookings-cancel-menu__container">
          <p>{action}</p>
          <div className="my-bookings-cancel-menu__btn-container">
            <button
              type="button"
              className="bookings-card__button accept-btn"
              onClick={handleChildClose}
            >
              Ok
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

ChildModal.propTypes = {
  handleParentClose: PropTypes.func.isRequired,
  cancelBooking: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default ChildModal;
