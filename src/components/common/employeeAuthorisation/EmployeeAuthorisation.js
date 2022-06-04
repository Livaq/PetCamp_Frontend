import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './employeeAuthorisation.scss';
import { EMAIL_VALIDATION } from '../../../common/regex';
import loginController from '../../../controllers/clientControllers/authorization/loginController';
import Role from '../../../common/Role';
import { setUserId, setUserName } from '../../../slices/UserSlice';
import getTokenData from '../../../services/accessToken/getTokenData';

function EmployeeAuthorisation() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function validateEmail(currLogin) {
    setTouched(true);
    setEmailValid(EMAIL_VALIDATION.test(currLogin));
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    loginController(email, password, Role.ADMIN).then((res) => {
      if (res.status === 200) {
        dispatch(setUserId(res.data.id));
        localStorage.setItem('token', res.data.token);
        dispatch(setUserId(getTokenData(res.data.token).id));
        dispatch(setUserName(getTokenData(res.data.token).name));
        history.push('/admin/profile');
      } else {
        setErrorText(res.data.message);
      }
    });
  };

  return (
    <>
      <div role="none" className="employeeAuthorisation__wrap">
        <div className="employeeAuthorisation__wrap_bkg">
          <div className="employeeAuthorisation__container">
            <div className="employeeAuthorisation__header">Log in</div>
            <form>
              <label className="label" htmlFor="employeeAuthorisation__login">
                <div
                  className={`employeeAuthorisation__labels ${
                    !isEmailValid && isTouched ? 'invalidInput' : ''
                  }`}
                >
                  Email
                </div>
                <input
                  id="employeeAuthorisation__login"
                  type="text"
                  value={email}
                  className="employeeAuthorisation__inputs"
                  onChange={(e) => {
                    validateEmail(e.target.value);
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label
                htmlFor="employeeAuthorisation__password"
                className="label-password"
              >
                <div className="employeeAuthorisation__labels">password</div>
                <input
                  id="employeeAuthorisation__password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="employeeAuthorisation__inputs"
                />
                <button
                  className={
                    isPasswordVisible
                      ? 'toggleVisibility visible'
                      : 'toggleVisibility'
                  }
                  type="button"
                  aria-label="Visibility"
                  onClick={() => setPasswordVisibility(!isPasswordVisible)}
                />
              </label>
              <div className="employeeAuthorisation__forgot-password">
                forgot your password?
              </div>
              <button
                type="submit"
                className="employeeAuthorisation__submit"
                onClick={handleSubmitForm}
                aria-label="log in"
              >
                Log in
              </button>
              {errorText.length > 0 && (
                <p className="employeeAuthorisation__error">{errorText}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeAuthorisation;
