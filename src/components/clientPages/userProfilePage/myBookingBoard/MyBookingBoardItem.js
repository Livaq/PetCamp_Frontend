import React from 'react';
import PropTypes from 'prop-types';
import './MyBookingBoardItem.scss';
import formatDate from '../../../../common/formatDate';

function MyBookingBoardItem({ booking }) {
  return (
    <div className="myBookingBoardItem__container">
      <div className="myBookingBoardItem__adress">
        <p className="myBookingBoardItem__title">Adress</p>
        <p className="myBookingBoardItem__data">{`${booking.city}, ${booking.street}`}</p>
      </div>
      <div className="myBookingBoardItem__room">
        <p className="myBookingBoardItem__title">Room</p>
        <p className="myBookingBoardItem__data">Room {booking.room_number}</p>
      </div>
      <div className="myBookingBoardItem__pet">
        <p className="myBookingBoardItem__title">Pet</p>
        <p className="myBookingBoardItem__data">{booking.name}</p>
      </div>
      <div className="myBookingBoardItem__date">
        <p className="myBookingBoardItem__title">Date</p>
        <p className="myBookingBoardItem__data">
          {formatDate(new Date(booking.booking_start))}-
          {formatDate(new Date(booking.booking_end))}
        </p>
      </div>
    </div>
  );
}

MyBookingBoardItem.propTypes = {
  booking: PropTypes.exact({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    room_number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    booking_start: PropTypes.string.isRequired,
    booking_end: PropTypes.string.isRequired,
  }).isRequired,
};
export default MyBookingBoardItem;
