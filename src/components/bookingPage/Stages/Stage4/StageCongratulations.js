import React from 'react';
import './stageCongratulations.scss';

function StageCongratulations() {
  return (
    <div className="stage_congratulations__main">
      <div className="stage_congratulations__content">
        <div className="congratulations-dashboard">
          <p className="congratulations-dashboard__title">Congratulations!</p>
          <p className="congratulations-dashboard__message">
            Please check your profile page
          </p>
        </div>
      </div>
    </div>
  );
}

export default StageCongratulations;
