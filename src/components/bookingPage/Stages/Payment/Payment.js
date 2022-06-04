import { Button } from '@mui/material';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import addBookController from '../../../../controllers/clientControllers/addBook/addBookController';
import { clearFormData } from '../../../../slices/bookingFormSlice';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
const IS_ACTIVE = true;

const Payment = ({ prev, next }) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  const bookingInfo = useSelector((state) => state.bookingForm);

  const handlePay = (e) => {
    e.preventDefault();
    if (isValid) {
      addBookController(
        userId,
        bookingInfo.pets,
        bookingInfo.booking.campId,
        bookingInfo.booking.startDate,
        bookingInfo.booking.endDate,
        IS_ACTIVE,
        bookingInfo.rooms
      );
      dispatch(clearFormData());
      next();
    }
  };

  return (
    <div className="stage-container">
      <div className="booking-content_head">
        <h2 className="stage-title">Make a payment</h2>
        <button type="button" className="go-back" onClick={prev}>
          Go back
        </button>
      </div>
      <br />
      <Elements stripe={stripePromise}>
        <form onSubmit={handlePay}>
          <CardElement
            onChange={(event) => {
              setIsValid(event.complete);
            }}
          />
          <br />
          <Button variant="contained" type="submit" size="small">
            Pay
          </Button>
        </form>
      </Elements>
    </div>
  );
};

Payment.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Payment;
