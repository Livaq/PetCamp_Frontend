import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Button,
  DialogContent,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ConfirmDialog = ({ isOpen, setIsOpen }) => {
  const history = useHistory();
  const handleClose = () => {
    setIsOpen(false);
    history.push('/');
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="sm" fullWidth>
      <DialogTitle>Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>Password was succesfully updated</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ConfirmDialog;
