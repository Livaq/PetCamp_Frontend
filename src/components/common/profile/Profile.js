import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import userIcon from '../../../assets/icons/user.png';
import Authorization from '../authorization/Authorization';
import ForgotPasswordDialog from '../authorization/forgotPasswordDialog/ForgotPasswordDialog';
import './profile.scss';

function Profile() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isForgotPassword, setForgotPassword] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  const userName = useSelector((state) => state.user.userName);

  useEffect(() => {
    if (!userId) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [userId]);

  return (
    <>
      <button
        type="button"
        className="user-profile-container"
        onClick={() => setIsLoginPopupOpen(true)}
      >
        <img src={userIcon} alt="user icon" />
        <p className="user-profile-text">{isLogin ? userName : 'Log In'}</p>
      </button>
      {isLoginPopupOpen && (
        <Authorization
          setIsLoginPopupOpen={setIsLoginPopupOpen}
          setForgotPassword={setForgotPassword}
        />
      )}
      <ForgotPasswordDialog
        isOpen={isForgotPassword}
        setOpen={setForgotPassword}
      />
    </>
  );
}

export default Profile;
