import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import forgotPasswordController from '../../../../controllers/clientControllers/changePassword/forgotPasswordController';
import './forgotPasswordDialog.scss';
import SuccessChangePassword from './SuccessChangePassword';

const ForgotPasswordDialog = ({ isOpen, setOpen }) => {
  const [email, setEmail] = useState('');
  const [isEmailIncorrect, setEmailIncorrect] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setEmailIncorrect(false);
    setEmail('');
  };

  const handleSend = () => {
    forgotPasswordController(email).then((res) => {
      if (res.status === 200) {
        setEmail('');
        setSuccess(true);
      } else {
        setEmailIncorrect(true);
      }
    });
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Enter email address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email address to restore password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {isEmailIncorrect && (
            <p className="wrong-input">Email address dose not exist!</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Send</Button>
        </DialogActions>
      </Dialog>
      <Dialog>
        <DialogTitle>Success</DialogTitle>
      </Dialog>
      <SuccessChangePassword
        isOpen={isSuccess}
        setOpen={setSuccess}
        setForgotPasswordDialog={setOpen}
      />
    </>
  );
};

ForgotPasswordDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ForgotPasswordDialog;
