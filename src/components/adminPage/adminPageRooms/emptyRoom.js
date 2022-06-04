import React from 'react';
import PropTypes from 'prop-types';

const EmptyRoom = ({ num }) => (
  <div className="room free">
    <div className="room-translation" />
    <span className="room-number">ROOM {num}</span>
    <a href="/" className="room-report" onClick={(e) => e.preventDefault()}>
      report
    </a>
  </div>
);

EmptyRoom.propTypes = {
  num: PropTypes.number.isRequired,
};

export default EmptyRoom;
