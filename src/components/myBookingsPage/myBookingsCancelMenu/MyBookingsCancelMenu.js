import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './myBookingsCancelMenu.scss';
import PropTypes from 'prop-types';
import ChildModal from './MyBookingCancelMenuChild';

export default function NestedModal({
  cancelBooking,
  className,
  actionIcon,
  actionWithBooking,
}) {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={className}>
        {actionIcon}
      </button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="my-bookings-cancel-menu__container">
          <p>{`Do you want to ${actionWithBooking.act} this booking?`}</p>
          <div className="my-bookings-cancel-menu__btn-container">
            <ChildModal
              handleParentClose={handleClose}
              cancelBooking={cancelBooking}
              action={actionWithBooking.result}
            />
            <button
              type="button"
              onClick={handleClose}
              className="bookings-card__button decline-btn"
            >
              No
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

NestedModal.propTypes = {
  cancelBooking: PropTypes.func.isRequired,
  actionIcon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  actionWithBooking: PropTypes.objectOf().isRequired,
};
