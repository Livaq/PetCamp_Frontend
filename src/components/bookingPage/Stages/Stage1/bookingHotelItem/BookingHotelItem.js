import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './bookingHotelItem.scss';
import { CircularProgress } from '@mui/material';
import locationIcon from '../../../../../assets/icons/location-icon.png';

function BookingHotelItem({ freeRooms, isLoading }) {
  const isLogin = localStorage.getItem('token');
  const city = useSelector((state) => state.bookingForm.booking.city);
  const street = useSelector((state) => state.bookingForm.booking.street);
  const quantity = useSelector((state) => state.bookingForm.booking.quantity);

  return (
    <div className="booking-hotel-item__container">
      <div className="booking-hotel-item__address-block">
        <span>Cat Hotel №1</span>
        <span>
          <img src={locationIcon} alt="location" />
          {city}
        </span>
        <span>{street}</span>
      </div>
      <div className="booking-hotel-item__available-rooms-block">
        {isLoading ? (
          <div className="free-room-loading">
            <CircularProgress />
          </div>
        ) : (
          <div className="booking-hotel-item__available-rooms-block_header">
            {freeRooms} standard rooms are available
          </div>
        )}
        <div className="booking-hotel-item__available-rooms-block_content">
          {isLogin ? (
            <div className="booking-hotel-item__available-rooms-block_check-item">
              <div>CHECK-IN</div>
              <div>2 PM - 8 PM</div>
            </div>
          ) : null}
          {isLogin ? (
            <div className="booking-hotel-item__available-rooms-block_check-item">
              <div>CHECK-OUT</div>
              <div>10 AM - 1 PM</div>
            </div>
          ) : null}
          <div
            className={
              isLogin
                ? 'proceed-booking__price'
                : 'proceed-booking__price-unlogged'
            }
          >
            <span>PRICE:</span>
            <span>$ 12/day</span>
            <div>
              <span>PETS:</span>
              <span>{quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BookingHotelItem.propTypes = {
  freeRooms: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BookingHotelItem;
