import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import HeaderUserProfilePage from '../../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../../startPage/startPageFooter/startPageFooter';
import changePasswordController from '../../../controllers/clientControllers/changePassword/changePasswordController';
import ConfirmDialog from './ConfirmDialog';
import './forgotPassword.scss';
import { PASSWORD_VALIDATION } from '../../../common/regex';

const ForgotPassword = () => {
  const { id } = useParams();
  const [newPassword, setNewPassword] = useState({
    password: '',
    repeatPassword: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPasswordIncorrect, setPasswordIncorrect] = useState(false);

  const handleSubmit = (e) => {
    if (
      newPassword.password === newPassword.repeatPassword &&
      PASSWORD_VALIDATION.test(newPassword.password) &&
      PASSWORD_VALIDATION.test(newPassword.repeatPassword)
    ) {
      changePasswordController(id, newPassword.password).then((res) => {
        if (res.status === 200) {
          setIsDialogOpen(true);
        }
      });
    } else {
      setPasswordIncorrect(true);
    }
    e.preventDefault();
  };

  return (
    <div className="new-password">
      <HeaderUserProfilePage />
      <div className="new-password__wrapper">
        <form onSubmit={handleSubmit} className="new-password__form">
          <label htmlFor="newPassword">
            New password:
            <input
              type="password"
              id="newPassword"
              value={newPassword.password}
              onChange={(e) => {
                setNewPassword({ ...newPassword, password: e.target.value });
              }}
              required
            />
          </label>

          <label htmlFor="newPasswordRepeat">
            Repeat new password:
            <input
              type="password"
              id="newPasswordRepeat"
              value={newPassword.repeatPassword}
              onChange={(e) => {
                setNewPassword({
                  ...newPassword,
                  repeatPassword: e.target.value,
                });
              }}
              required
            />
          </label>
          <Button variant="contained" type="submit">
            Change password
          </Button>
          <ul className="new-password__rule">
            Password must:
            <li>be between 8 to 14 characters</li>
            <li>
              {
                'contain numbers (0-9), latin (A-z) and special symbols (.,:;?!*+%-@[]{}<>/$#() )'
              }
            </li>
            <li>must contain at least one uppercase latin symbol </li>
          </ul>
          {isPasswordIncorrect && (
            <p className="new-password__wrong-validation">
              Password incorrect!
            </p>
          )}
        </form>
        <ConfirmDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
