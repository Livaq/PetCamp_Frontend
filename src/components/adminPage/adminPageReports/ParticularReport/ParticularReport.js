import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ParticularReport.scss';

const ParticularReport = ({ reports }) => {
  const params = useParams();
  const { booking, number } = params;
  const report = reports.find(
    (item) => item.booking_id === +booking && +item.report_number === +number
  );
  return (
    <div className="particular-report">
      <hr />
      <div className="report-number">
        Report <span>№</span>
        {number}
      </div>
      <div className="report-info">
        <div className="report-info__item">Booking №{report?.booking_id}</div>
        <div className="report-info__item">Date: {report?.write_time}</div>
        <div className="report-info__item">Pet name: {report?.name}</div>
        <div className="report-info__item">
          Pet type: {report?.type.toLowerCase()}
        </div>
        <div className="report-info__item">Option: standard room</div>
        <span className="report-info__item">
          Start date: {report?.booking_start}
        </span>
        <span className="report-info__item">
          End date: {report?.booking_end}
        </span>
        <br />
        <br />
        <div className="report-info__item">
          Stress level: {report?.stress_level}
        </div>
        <div className="report-info__item">Appetite: {report?.appetite}</div>
        <div className="report-info__item">Play time: {report?.play_time}</div>
      </div>
      <p>Photo report</p>
      <div className="report-photos">
        <div className="report-photo" />
        <div className="report-photo" />
        <div className="report-photo" />
      </div>
      <div className="report-info__item">
        Manager: {report?.manager_surname} {report?.manager_name}
      </div>
    </div>
  );
};

ParticularReport.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ParticularReport;
