import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MyReportsBoardItem.scss';
import Arrow from '../../../../assets/icons/arrow.png';
import catType from '../../../../assets/images/catType.jpeg';
import activeStatusIcon from '../../../../assets/icons/bookings-active.png';
import inactiveStatusIcon from '../../../../assets/icons/bookings-inactive.png';
import formatDate from '../../../../common/formatDate';
import VideoStream from '../../../myBookingsPage/videoStream/VideoStream';

function MyReportsBoardItem({ report }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="myReportsBoardItem__container">
      <div className="myReportsBoardItem__image">
        <img className="item-avatar" src={catType} alt="avatar" />
        {report.is_active ? (
          <img
            src={activeStatusIcon}
            alt="active status"
            className="item-avatar__icon"
          />
        ) : (
          <img
            src={inactiveStatusIcon}
            alt="inactive status"
            className="item-avatar__icon"
          />
        )}
      </div>
      <div className="myReportsBoardItem__name">
        <p className="myReportsBoardItem__title">Name</p>
        <p className="myReportsBoardItem__data">{report.pet_name}</p>
      </div>
      <div className="myReportsBoardItem__booking-number">
        <p className="myReportsBoardItem__title">Booking №</p>
        <p className="myReportsBoardItem__data">{report.booking}</p>
      </div>

      <div className="myReportsBoardItem__manager">
        <p className="myReportsBoardItem__title">Manager</p>
        <p className="myReportsBoardItem__data">
          {report.surname} {report.name}
        </p>
      </div>
      <div className="myReportsBoardItem__date">
        <p className="myReportsBoardItem__title">Date</p>
        <p className="myReportsBoardItem__data">
          {formatDate(new Date(report.write_time))}
        </p>
      </div>
      <div className="myReportsBoardItem__link-to-camera">
        <p className="myReportsBoardItem__title" />
        <button
          className="myReportsBoardItem__data link"
          type="button"
          onClick={() => setIsVideoOpen(true)}
        >
          <p>Live camera</p>
          <img className="arrow" src={Arrow} alt="arrow" />
        </button>
      </div>
      <VideoStream
        videoLink={report.video}
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
      />
    </div>
  );
}

MyReportsBoardItem.propTypes = {
  report: PropTypes.exact({
    id: PropTypes.number.isRequired,
    report_number: PropTypes.number.isRequired,
    stress_level: PropTypes.string.isRequired,
    appetite: PropTypes.string.isRequired,
    play_time: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    room_number: PropTypes.number.isRequired,
    pet_name: PropTypes.string.isRequired,
    booking: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    write_time: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    is_active: PropTypes.bool.isRequired,
  }).isRequired,
};
export default MyReportsBoardItem;
