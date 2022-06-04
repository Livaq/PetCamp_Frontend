import React from 'react';
import PropTypes from 'prop-types';
import './stageNumbers.scss';

const Stages = ({ num }) => {
  const stageStyle = (n, curr) => (n === curr ? 'stage' : 'stage transparent');
  return (
    <div className="stages">
      <div className={stageStyle(1, num)}>
        <p className="stage-number">1</p>
        <p className="stage-description">book an option</p>
      </div>
      <div className={stageStyle(2, num)}>
        <p className="stage-number">2</p>
        <p className="stage-description">choose a pet</p>
      </div>
      <div className={stageStyle(3, num)}>
        <p className="stage-number">3</p>
        <p className="stage-description">payment</p>
      </div>
    </div>
  );
};

Stages.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Stages;
