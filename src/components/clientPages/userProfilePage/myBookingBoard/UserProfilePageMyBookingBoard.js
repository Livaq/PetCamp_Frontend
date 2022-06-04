import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserProfilePageMyBookingBoard.scss';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import Arrow from '../../../../assets/icons/arrow.png';
import MyBookingBoardItem from './MyBookingBoardItem';

const UserProfilePageMyBookingBoard = ({ bookings, isLoading }) => (
  <div className="userProfilePageMyPet">
    <div className="userProfilePageMyPet__container">
      <div className="userProfilePageMyPet__header">
        <p className="userProfilePageMyPet__header__title">My bookings</p>
        <NavLink to="bookings" className="userProfilePageMyPet__header__link">
          <p>See more</p>
          <img className="arrow" src={Arrow} alt="arrow" />
        </NavLink>
      </div>
      {isLoading ? (
        <div className="profile-spiner">
          <CircularProgress />
        </div>
      ) : (
        <>
          {bookings.length === 0 ? (
            <div className="userProfilePage__empty-section">
              <p>NO BOOKINGS YET</p>
            </div>
          ) : (
            <div className="userProfilePageMyPet__content">
              {bookings.map((booking) => (
                <MyBookingBoardItem key={booking.id} booking={booking} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

UserProfilePageMyBookingBoard.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      room_number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      booking_start: PropTypes.string.isRequired,
      booking_end: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UserProfilePageMyBookingBoard;
