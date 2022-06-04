import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const SuccessChangePassword = ({
  isOpen,
  setOpen,
  setForgotPasswordDialog,
}) => {
  const handleClose = () => {
    setOpen(false);
    setForgotPasswordDialog(false);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We have send you a restore link to your email address.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
      <Dialog>
        <DialogTitle>Success</DialogTitle>
      </Dialog>
    </>
  );
};

SuccessChangePassword.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setForgotPasswordDialog: PropTypes.func.isRequired,
};

export default SuccessChangePassword;
