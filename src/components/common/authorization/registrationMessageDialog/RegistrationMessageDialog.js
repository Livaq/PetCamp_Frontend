import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import PropTypes from 'prop-types';

function RegistrationMessageDialog({ setIsLoginPopupOpen }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setIsLoginPopupOpen(false);
  };

  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
      <DialogTitle>Registration</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Verification code has been sent to your email addres or phone number!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

RegistrationMessageDialog.propTypes = {
  setIsLoginPopupOpen: PropTypes.func.isRequired,
};

export default RegistrationMessageDialog;
