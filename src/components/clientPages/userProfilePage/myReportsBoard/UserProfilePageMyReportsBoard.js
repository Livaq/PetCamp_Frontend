import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import './UserProfilePageMyReportsBoard.scss';
import { NavLink } from 'react-router-dom';
import Arrow from '../../../../assets/icons/arrow.png';
import MyReportsBoardItem from './MyReportsBoardItem';

const UserProfilePageMyReportsBoard = ({ isLoading, reports }) => (
  <div className="userProfilePageMyReports">
    <div className="userProfilePageMyReports__container">
      <div className="userProfilePageMyReports__header">
        <p className="userProfilePageMyReports__header__title">My reports</p>
        <NavLink to="reports" className="userProfilePageMyPet__header__link">
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
          {reports.length === 0 ? (
            <div className="userProfilePage__empty-section">
              <p>NO REPORTS YET</p>
            </div>
          ) : (
            <div className="userProfilePageMyReports__content">
              {reports.map((report) => (
                <MyReportsBoardItem key={report.id} report={report} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

UserProfilePageMyReportsBoard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  reports: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  ).isRequired,
};

export default UserProfilePageMyReportsBoard;
