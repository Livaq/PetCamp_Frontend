import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { setUser, setUserName } from '../../../slices/UserSlice';
import facebookIcon from '../../../assets/icons/facebook.svg';
import './authorization.scss';
import Role from '../../../common/Role';
import loginController from '../../../controllers/clientControllers/authorization/loginController';
import registrationController from '../../../controllers/clientControllers/authorization/regisrationController';
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
  PHONE_VALIDATION,
  NAME_VALIDATION,
} from '../../../common/regex';
import RegistrationMessageDialog from './registrationMessageDialog/RegistrationMessageDialog';
import getTokenData from '../../../services/accessToken/getTokenData';
import Input from '../../../common/inputs/Input';

function Authorization({ setIsLoginPopupOpen, setForgotPassword }) {
  const history = useHistory();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState({
    username: false,
    middlename: false,
    surname: false,
  });
  const [names, setNames] = useState({
    username: '',
    middlename: '',
    surname: '',
  });
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMessageRegistration, setIsMessageRegistration] = useState(false);
  const [errorText, setErrorText] = useState('');
  const dispatch = useDispatch();

  const validatePassword = (pass) => {
    setPasswordValid(PASSWORD_VALIDATION.test(pass));
  };

  const validateEmail = (currEmail) => {
    setIsEmailValid(EMAIL_VALIDATION.test(currEmail));
  };

  const validatePhone = (phoneNumber) => {
    setIsPhoneValid(PHONE_VALIDATION.test(phoneNumber));
  };

  const validateName = (e) => {
    setIsNameValid((prevState) => ({
      ...prevState,
      [e.target.id]: NAME_VALIDATION.test(e.target.value),
    }));
  };

  const closePopup = () => {
    setIsLoginPopupOpen(false);
  };

  const nameChange = (e) => {
    setNames((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    validateName(e);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
    validatePhone(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const loginHandler = () => {
    loginController(email, password, Role.CLIENT).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        const { id, name } = getTokenData(res.data.token);
        dispatch(setUser({ id, name }));
        setIsLoginPopupOpen(false);
        if (history.location.pathname !== '/booking') {
          history.push('/client/profile');
        }
      } else {
        setErrorText(res.data.message);
      }
    });
  };

  const registrationHandler = () => {
    registrationController(
      email,
      password,
      Role.CLIENT,
      names.username,
      names.middlename,
      names.surname,
      phone
    ).then((res) => {
      if (res.status === 200) {
        setIsMessageRegistration(true);
      } else setErrorText(res.data.message);
    });
    dispatch(setUserName(names.username));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      loginHandler();
    } else {
      registrationHandler();
    }
  };
  const STYLE = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div style={{ display: 'none' }}>
      <Modal open={setIsLoginPopupOpen} onClose={closePopup}>
        <Box sx={STYLE}>
          <div className="authorisation__header">
            {isLogin ? 'Log In' : 'Sign Up'}
          </div>
          <form>
            <Input
              id="email"
              type="text"
              className="authorisation__inputs"
              placeHolder="example@gmail.com"
              value={email}
              onChange={emailChange}
              valid={isEmailValid}
              htmlFor="email"
              name="email"
            />

            <Input
              id="username"
              type="text"
              className="authorisation__inputs"
              placeHolder="Roman"
              value={names.username}
              onChange={nameChange}
              valid={isNameValid.username}
              login={isLogin}
              htmlFor="username"
              name="name"
            />
            <Input
              id="middlename"
              type="text"
              className="authorisation__inputs"
              placeHolder="Romanovich"
              value={names.middlename}
              onChange={nameChange}
              valid={isNameValid.middlename}
              login={isLogin}
              htmlFor="middlename"
              name="middle name(optional)"
            />
            <Input
              id="surname"
              type="text"
              className="authorisation__inputs"
              placeHolder="Romanov"
              value={names.surname}
              onChange={nameChange}
              valid={isNameValid.surname}
              login={isLogin}
              htmlFor="middlename"
              name="surname"
            />
            <Input
              id="phone"
              type="text"
              className="authorisation__inputs"
              placeHolder="+375291111111"
              value={phone}
              onChange={phoneChange}
              valid={isPhoneValid}
              login={isLogin}
              htmlFor="phone"
              name="mobile number"
            />
            <label
              htmlFor="password"
              className={`label-password ${
                password.length > 0 &&
                !isLogin &&
                (!isPasswordValid ? 'invalid-password-input' : 'valid-input')
              }`}
            >
              <div className="authorisation__labels">password</div>
              <input
                id="password"
                type={isPasswordVisible ? 'text' : 'password'}
                className="authorisation__inputs"
                placeholder="password"
                value={password}
                onChange={passwordChange}
              />
              <button
                className={
                  isPasswordVisible
                    ? 'toggle-visibility visible'
                    : 'toggle-visibility'
                }
                type="button"
                aria-label="Visibility"
                onClick={() => setPasswordVisibility(!isPasswordVisible)}
              />
            </label>
            {isLogin && (
              <button
                type="button"
                className="authorisation__forgot-password"
                onClick={() => {
                  setForgotPassword(true);
                  closePopup();
                }}
              >
                forgot your password?
              </button>
            )}
            {errorText.length > 0 && <p className="error-text">{errorText}</p>}

            <button
              type="submit"
              className="authorisation__submit"
              onClick={handleFormSubmit}
              aria-label="log in / sign up"
              disabled={
                isLogin ? !isEmailValid : !(isPasswordValid && isEmailValid)
              }
            >
              {isLogin ? 'log in' : 'sign up'}
            </button>
          </form>
          <div className="authorisation__or">or</div>
          <div className="authorisation__facebook-authorisation">
            <img
              src={facebookIcon}
              alt="facebook authorisation"
              className="authorisation__facebook-img"
            />
          </div>
          {isLogin ? (
            <div className="authorisation__sign-up-container">
              <span>I’m a new client.</span>
              <button
                className="authorisation__sign-up"
                type="button"
                aria-label="sign up"
                onClick={() => {
                  setIsLogin(false);
                  setPasswordValid(false);
                  setEmail('');
                  setPassword('');
                  setErrorText('');
                }}
              >
                Sign up
              </button>
            </div>
          ) : null}

          {isMessageRegistration && (
            <RegistrationMessageDialog
              setIsLoginPopupOpen={setIsLoginPopupOpen}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}

Authorization.propTypes = {
  setIsLoginPopupOpen: PropTypes.func.isRequired,
  setForgotPassword: PropTypes.func.isRequired,
};

export default Authorization;
