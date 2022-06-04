import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bookingCardAvatar from '../../../assets/images/profile-bookings-card-avatar.png';
import arrowIcon from '../../../assets/icons/show-hide-arrow.png';
import deleteButtonIcon from '../../../assets/icons/delete-button.png';
import activeStatusIcon from '../../../assets/icons/bookings-active.png';
import inactiveStatusIcon from '../../../assets/icons/bookings-inactive.png';
import './bookingsCard.scss';
import formatDate from '../../../common/formatDate';
import NestedModal from '../myBookingsCancelMenu/MyBookingsCancelMenu';
import deleteBookingController from '../../../controllers/clientControllers/deleteBookingController/deleteBookingController';
import disableBookingController from '../../../controllers/clientControllers/disableBookingController/disableBookingController';
import VideoStream from '../videoStream/VideoStream';

const BookingsCard = ({
  bookingNumber,
  startDate,
  endDate,
  petName,
  bookingStatus,
  petType,
  videoLink,
}) => {
  const [isHidden, setHidden] = useState(true);
  const [isExistance, setExistance] = useState({
    isCanceled: false,
    isRemoved: false,
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const showHideBookingsCard = () => setHidden(!isHidden);
  const cancelBooking = () => {
    disableBookingController(bookingNumber).then((res) => {
      if (res.status === 200) {
        setExistance((prevState) => ({
          ...prevState,
          isCanceled: true,
        }));
      }
    });
  };

  const removeBooking = () => {
    deleteBookingController(bookingNumber).then((res) => {
      if (res.status === 200) {
        setExistance((prevState) => ({
          ...prevState,
          isRemoved: true,
        }));
      }
    });
  };

  return (
    <div
      className={
        isHidden
          ? 'bookings-card__container-hidden'
          : 'bookings-card__container-shown show-animation'
      }
      style={isExistance.isRemoved ? { display: 'none' } : null}
    >
      <div className="bookings-card__inner-container">
        <div className="bookings-card__img-container">
          <img src={bookingCardAvatar} alt="bookings avatar" />
        </div>
        <h3 className="bookings-card__pet-name-header">
          {bookingStatus ? (
            <img src={activeStatusIcon} alt="active status" />
          ) : (
            <img src={inactiveStatusIcon} alt="inactive status" />
          )}
          {petName}
        </h3>
        <div className="bookings-card__content-item">
          <span>Booking №</span>
          <span>{bookingNumber}</span>
        </div>
        <>
          <div className="bookings-card__content-item">
            <span>Start date</span>
            <span>{formatDate(new Date(startDate))}</span>
          </div>
          <div className="bookings-card__content-item">
            <span>End date</span>
            <span>{formatDate(new Date(endDate))}</span>
          </div>
          <div className="bookings-card__content-item">
            <span>Paid</span>
            <span>Visa 2233</span>
          </div>
          <div className="bookings-card__content-item">
            <span>Cat/Dog</span>
            <span>{petType}</span>
          </div>
          <div className="bookings-card__content-item">
            <span>Option</span>
            <span>Standard</span>
          </div>
          <div className="bookings-card__content-item">
            <span>Additional</span>
            <div>
              <div>Pet transfer</div>
              <div>Pet grooming</div>
            </div>
          </div>
          {!isExistance.isCanceled && (
            <div className="bookings-card__content-item">
              <span>Video control</span>
              <button
                type="button"
                className="bookings-card__content-item_camera"
                onClick={() => setIsVideoOpen(true)}
              >
                Go to live
              </button>
            </div>
          )}
          <div className="bookings-card__button-container">
            <div>
              <NestedModal
                cancelBooking={bookingStatus ? cancelBooking : removeBooking}
                className={
                  bookingStatus
                    ? 'bookings-card__button decline-btn'
                    : 'bookings-card__delete-card-button'
                }
                actionIcon={
                  bookingStatus ? (
                    'Cancel'
                  ) : (
                    <img src={deleteButtonIcon} alt="remove" />
                  )
                }
                actionWithBooking={
                  bookingStatus
                    ? {
                        act: 'cancel',
                        result:
                          'Please, wait confirmation of booking cancel from the manager',
                      }
                    : {
                        act: 'delete',
                        result: 'You succesfully deleted your booking',
                      }
                }
              />
            </div>
          </div>
        </>

        <div className="bookings-card__arrow-img-container">
          <button type="button" onClick={showHideBookingsCard}>
            <img
              src={arrowIcon}
              alt="show and hide arrow"
              className={
                isHidden
                  ? 'bookings-card__arrow-img-hide'
                  : 'bookings-card__arrow-img-show'
              }
            />
          </button>
        </div>
      </div>
      <VideoStream
        videoLink={videoLink}
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
      />
    </div>
  );
};
BookingsCard.propTypes = {
  petName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  bookingNumber: PropTypes.number.isRequired,
  bookingStatus: PropTypes.bool.isRequired,
  petType: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
};

export default BookingsCard;
