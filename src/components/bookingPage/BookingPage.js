import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StageNumbers from './Stages/StageNumbers/StageNumbers';
import './BookingPage.scss';
import ProceedBooking from './Stages/Stage1/ProceedBooking';
import Stage2 from './Stages/Stage2/Stage2';
import Stage3 from './Stages/Stage3/Stage3';
import StageCongratulations from './Stages/Stage4/StageCongratulations';
import Footer from '../startPage/startPageFooter/startPageFooter';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Payment from './Stages/Payment/Payment';

const Stages = {
  BOOKING_SETTTINGS: 1,
  CHOOSE_PETS: 2,
  SUMMARY: 3,
  PAYMENT: 4,
  CONGRATULATIONS: 5,
};

const BookingPage = () => {
  const [stage, setStage] = useState(1);

  const prev = () => {
    setStage(stage - 1);
  };
  const next = () => {
    setStage(stage + 1);
  };

  const quantity = useSelector((state) => state.bookingForm.booking.quantity);
  const start = String(
    useSelector((state) => state.bookingForm.booking.startDate)
  );
  const end = String(useSelector((state) => state.bookingForm.booking.endDate));
  const term =
    (new Date(...end.split('T')[0].split('-')) -
      new Date(...start.split('T')[0].split('-'))) /
    86400 /
    1000;

  const [total, setTotal] = useState(0);
  const [transfer, setTransfer] = useState(false);
  const [grooming, setGrooming] = useState(false);

  useEffect(() => {
    setTotal(quantity * (term * 12 + (transfer ? 5 : 0) + (grooming ? 2 : 0)));
  }, [grooming, transfer]);

  return (
    <>
      <div className="booking-page-wrapper">
        <div className="user-profile__header-wrapper">
          <HeaderUserProfilePage />
          {stage < Stages.PAYMENT && (
            <StageNumbers num={stage} setStage={setStage} />
          )}
          <div className="booking-content">
            <div className="wrapper">
              {stage === Stages.BOOKING_SETTTINGS && (
                <ProceedBooking
                  next={next}
                  transfer={transfer}
                  setTransfer={setTransfer}
                  grooming={grooming}
                  setGrooming={setGrooming}
                  total={total}
                />
              )}
              {stage === Stages.CHOOSE_PETS && (
                <Stage2 prev={prev} next={next} />
              )}
              {stage === Stages.SUMMARY && (
                <Stage3 prev={prev} next={next} total={total} />
              )}
              {stage === Stages.PAYMENT && <Payment prev={prev} next={next} />}
              {stage === Stages.CONGRATULATIONS && <StageCongratulations />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;
