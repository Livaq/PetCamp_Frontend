import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './myBookingsPage.scss';
import BookingsCard from './bookingsCard/BookingsCard';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../startPage/startPageFooter/startPageFooter';
import getBookingsController from '../../controllers/clientControllers/getBookings/getBookingsController';

const MyBookingsPage = () => {
  const [myBookings, setMyBookings] = useState([]);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    getBookingsController(userId).then((res) => {
      if (res.status === 200) {
        setMyBookings(res.data.booking);
      }
    });
  }, []);

  return (
    <div>
      <HeaderUserProfilePage />
      <div className="my-bookings-page__content-wrapper">
        <div className="my-bookings-page__content-container">
          <h2 className="my-bookings-page__content-header">My bookings</h2>
          <div className="my-bookings-page__booking-cards-container">
            {myBookings.map((item) => (
              <BookingsCard
                key={item.id}
                bookingStatus={item.is_active}
                bookingNumber={item.id}
                startDate={item.booking_start}
                endDate={item.booking_end}
                petName={item.name}
                petType={item.pet_type}
                videoLink={item.video}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MyBookingsPage;
