import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import HeaderUserProfilePage from '../headerUserProfilePage/HeaderUserProfilePage';
import ReportCard from './ReportCard/ReportCard';
import Footer from '../../startPage/startPageFooter/startPageFooter';
import './myReportsPage.scss';
import getReportsController from '../../../controllers/clientControllers/getReports/getReportsController';

const myReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    getReportsController(userId).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        setReports(res.data.reportRequest);
      }
    });
  }, []);

  return (
    <>
      <HeaderUserProfilePage />
      <div className="reports">
        <h2>My reports</h2>
        <div className="cards">
          {isLoading ? (
            <div className="spiner">
              <CircularProgress />
            </div>
          ) : (
            <div className="reports-cards">
              {reports.map((item) => (
                <ReportCard
                  key={item.id}
                  writeTime={item.write_time}
                  booking={item.booking}
                  reportNumber={item.report_number}
                  petName={item.pet_name}
                  stressLevel={item.stress_level}
                  appetite={item.appetite}
                  playTime={item.play_time}
                  name={item.name}
                  surname={item.surname}
                  roomNumber={item.room_number}
                  bookingStatus={item.is_active}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default myReportsPage;
