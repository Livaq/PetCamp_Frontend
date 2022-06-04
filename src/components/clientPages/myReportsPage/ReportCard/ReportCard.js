import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './reportCard.scss';
import adminCat from '../../../../assets/images/admin-cat.png';
import activeStatusIcon from '../../../../assets/icons/bookings-active.png';
import inactiveStatusIcon from '../../../../assets/icons/bookings-inactive.png';
import grayRectangle from '../../../../assets/images/grey-rectangle.png';
import formatDate from '../../../../common/formatDate';
import arrowIcon from '../../../../assets/icons/show-hide-arrow.png';

function ReportCard({
  writeTime,
  booking,
  reportNumber,
  petName,
  stressLevel,
  appetite,
  playTime,
  name,
  surname,
  roomNumber,
  bookingStatus,
}) {
  const [isHidden, setHidden] = useState(true);
  const showHideBookingsCard = () => setHidden(!isHidden);
  const photosSrc = [grayRectangle, grayRectangle, grayRectangle];

  return (
    <div
      className={
        isHidden
          ? 'reports-card__container-hidden'
          : 'reports-card__container-shown show-animation-report'
      }
    >
      <div className="report__content">
        <div className="report__content-header">
          <div className="report__content-header__image">
            <img src={adminCat} alt="img" />
          </div>
          <div className="report__content-header__info">
            <div className="report__content-header__booking">
              <div className="report__content-header__booking-item">
                <div className="booking-item__title">Room</div>
                <div className="booking-item__data">Room №{roomNumber}</div>
              </div>
              <div className="report__content-header__booking-item">
                <div className="booking-item__title">Booking №</div>
                <div className="booking-item__data">{booking}</div>
              </div>
              <div className="report__content-header__booking-item">
                <div className="booking-item__title">Report №</div>
                <div className="booking-item__data">{reportNumber}</div>
              </div>
              <div className="report__content-header__booking-item">
                <div className="booking-item__title">Date</div>
                <div className="booking-item__data">
                  {formatDate(new Date(writeTime))}
                </div>
              </div>
            </div>
            <div className="pet-nickname__container">
              <div className="pet-nickname__container-image">
                {bookingStatus ? (
                  <img src={activeStatusIcon} alt="active status" />
                ) : (
                  <img src={inactiveStatusIcon} alt="inactive status" />
                )}
              </div>
              <div className="pet-nickname__container-title">{petName}</div>
            </div>
          </div>
        </div>
        <div className="report__content-selects">
          <div className="report-window__label">
            <div>stress level</div>
            <p>{stressLevel}</p>
          </div>
          <div className="report-window__label">
            <div>appetite</div>
            <p>{appetite}</p>
          </div>
          <div className="report-window__label">
            <div>play time</div>
            <p>{playTime}</p>
          </div>
        </div>
        <div className="report__content-gallery">
          <div className="report__content-gallery-photos">
            {photosSrc.map((el) => (
              <img src={el} alt="img" />
            ))}
          </div>
        </div>
        <div className="report__content-footer">
          <div className="report__content-reporter">
            <div className="report__content-reporter__title">Manager</div>
            <div className="report__content-reporter__data">
              {name} {surname}
            </div>
          </div>
          <div className="report-card__arrow-img-container">
            <button type="button" onClick={showHideBookingsCard}>
              <img
                src={arrowIcon}
                alt="show and hide arrow"
                className={
                  isHidden
                    ? 'report-card__arrow-img-hide'
                    : 'report-card__arrow-img-show'
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ReportCard.propTypes = {
  writeTime: PropTypes.string.isRequired,
  booking: PropTypes.number.isRequired,
  reportNumber: PropTypes.number.isRequired,
  petName: PropTypes.string.isRequired,
  stressLevel: PropTypes.string.isRequired,
  appetite: PropTypes.string.isRequired,
  playTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  roomNumber: PropTypes.number.isRequired,
  bookingStatus: PropTypes.bool.isRequired,
};

export default ReportCard;
