import React from 'react';
import { useDispatch } from 'react-redux';
import './adminPageHeader.scss';
import { useHistory } from 'react-router-dom';
import door from '../../../assets/icons/door.svg';
import { setUserId } from '../../../slices/UserSlice';

function AdminPageHeader() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(setUserId(''));
    localStorage.removeItem('token');
    history.push('/admin');
  };
  return (
    <div className="admin-page-reservations__header-position">
      <header className="admin-page-header">
        <h1>Pet Camp</h1>
        <a href="/" onClick={handleLogOut} className="logout-btn">
          Log out <img src={door} alt="Log out" />
        </a>
      </header>
    </div>
  );
}

export default AdminPageHeader;
