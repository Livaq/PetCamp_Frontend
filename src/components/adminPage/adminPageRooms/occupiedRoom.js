import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddReportDialog from './AddReportDialog';
import getReportNumberController from '../../../controllers/adminControllers/getReportNumberController';

const OccupiedRoom = ({ num, name, booking, petId }) => {
  const [modalActive, setModalActive] = useState(false);
  const [reportNumber, setReportNumber] = useState('');

  const handleReport = () => {
    setModalActive(true);
    getReportNumberController(booking).then((res) => {
      if (res.status === 200) {
        setReportNumber(res.data.reportNumber + 1);
      }
    });
  };

  const { path } = useRouteMatch();

  return (
    <>
      <div className="room active">
        <div className="room-translation" />
        <span className="room-number">ROOM {num}</span>
        <button
          type="button"
          href="/"
          className="room-report"
          onClick={() => handleReport()}
        >
          report
        </button>
        <p className="pet-name">
          <NavLink to={`${path}/${petId}`}>{name}</NavLink>
        </p>
        <p className="bokking-number">booking № {booking}</p>
      </div>
      <AddReportDialog
        active={modalActive}
        setActive={setModalActive}
        booking={booking}
        num={num}
        name={name}
        reportNumber={reportNumber}
      />
    </>
  );
};

OccupiedRoom.propTypes = {
  num: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  booking: PropTypes.number.isRequired,
  petId: PropTypes.string.isRequired,
};

export default OccupiedRoom;
