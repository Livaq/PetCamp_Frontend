import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './addReportDialog.scss';
import { useSelector } from 'react-redux';
import adminCat from '../../../assets/images/admin-cat.png';
import greenPaw from '../../../assets/icons/green-paw.png';
import grayRectangle from '../../../assets/images/grey-rectangle.png';
import { parseDate } from '../../../common/formatDate';
import addReportController from '../../../controllers/adminControllers/addReportController';

function AddReportDialog({
  active,
  setActive,
  booking,
  num,
  name,
  reportNumber,
}) {
  const userName = useSelector((state) => state.user.userName);
  const userSurname = useSelector((state) => state.user.userSurname);
  const writeTime = parseDate(new Date());
  const [stressLevel, setStressLevel] = useState('low');
  const [appetite, setAppetite] = useState('good');
  const [playTime, setPlayTime] = useState('30 minutes/day');

  const handleSubmit = () => {
    const newReport = {
      booking,
      writeTime,
      stressLevel,
      appetite,
      playTime,
      reportNumber,
    };
    addReportController(newReport);
    setActive(false);
  };
  const photosSrc = [grayRectangle, grayRectangle, grayRectangle];
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
      onKeyDown={() => setActive(false)}
      aria-hidden="true"
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        <div className="modal__content-header">
          <div className="modal__content-header__image">
            <img src={adminCat} alt="img" />
          </div>
          <div className="modal__content-header__info">
            <div className="modal__content-header__booking">
              <div className="modal__content-header__booking-item">
                <div className="booking-item__title">Room</div>
                <div className="booking-item__data">Room №{num}</div>
              </div>
              <div className="modal__content-header__booking-item">
                <div className="booking-item__title">Booking №</div>
                <div className="booking-item__data">{booking}</div>
              </div>
              <div className="modal__content-header__booking-item">
                <div className="booking-item__title">Report №</div>
                <div className="booking-item__data">{reportNumber}</div>
              </div>
              <div className="modal__content-header__booking-item">
                <div className="booking-item__title">Date</div>
                <div className="booking-item__data">
                  {writeTime.split('-').join('.')}
                </div>
              </div>
            </div>
            <div className="pet-nickname__container">
              <div className="pet-nickname__container-image">
                <img src={greenPaw} alt="img" />
              </div>
              <div className="pet-nickname__container-title">{name}</div>
            </div>
          </div>
        </div>
        <div className="modal__content-selects">
          <label htmlFor="stress-level" className="report-window__label">
            <div>stress level</div>
            <select
              id="stress-level"
              value={stressLevel}
              onChange={(e) => {
                setStressLevel(e.target.value);
              }}
            >
              <option value="low" selected="selected">
                low
              </option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </label>
          <label htmlFor="appetite" className="report-window__label">
            <div>appetite</div>
            <select
              id="appetite"
              value={appetite}
              onChange={(e) => {
                setAppetite(e.target.value);
              }}
            >
              <option value="good" selected="selected">
                good
              </option>
              <option value="poor">poor</option>
            </select>
          </label>
          <label htmlFor="play-time" className="report-window__label">
            <div>play time</div>
            <select
              id="play-time"
              value={playTime}
              onChange={(e) => {
                setPlayTime(e.target.value);
              }}
            >
              <option value="30 minutes/day" selected="selected">
                30 minutes/day
              </option>
              <option value="no play time">no play time</option>
            </select>
          </label>
        </div>
        <div className="modal__content-gallery">
          <div className="modal__content-gallery-title">
            Please, load the photos
          </div>
          <div className="modal__content-gallery-photos">
            {photosSrc.map((el) => (
              <img src={el} alt="img" />
            ))}
          </div>
        </div>
        <div className="modal__content-reporter">
          <div className="modal__content-reporter__title">Manager</div>
          <div className="modal__content-reporter__data">
            {userName} {userSurname}
          </div>
        </div>
        <div className="modal__content-button-container">
          <button type="submit" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

AddReportDialog.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  booking: PropTypes.number.isRequired,
  reportNumber: PropTypes.number.isRequired,
};

export default AddReportDialog;
