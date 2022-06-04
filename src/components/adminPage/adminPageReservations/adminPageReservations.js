import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
// import Box from '@mui/material/Box';
import { parseDate } from '../../../common/formatDate';
import AdminPageSideBar from '../adminPageSideBar/adminPageSideBar';
import AdminPageHeader from '../adminPageHeader/adminPageHeader';
import bookingListController from '../../../controllers/adminControllers/bookingListController';
import disableBookingAdminController from '../../../controllers/adminControllers/disableBookingAdmin';
import './adminPageReservations.scss';

const filterByStatus = (bookings, status) => {
  console.log(bookings);
  const statuses = {
    ALL: 'All',
    CLOSE: 'Close request',
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
  };
  const currentDateISO = parseDate(new Date());
  const checkDateActual = (startDate, endDate) =>
    startDate.split('T')[0] <= currentDateISO &&
    endDate.split('T')[0] >= currentDateISO;

  switch (status) {
    case statuses.ALL:
      return bookings;
    case statuses.CLOSE:
      return bookings.filter((item) => !!item.want_disable);
    case statuses.ACTIVE:
      return bookings.filter(
        (item) =>
          item.is_active &&
          checkDateActual(item.booking_start, item.booking_end)
      );
    case statuses.INACTIVE:
      return bookings.filter(
        (item) =>
          !item.is_active ||
          !checkDateActual(item.booking_start, item.booking_end)
      );
    default:
      return bookings;
  }
};

function AdminPageReservations() {
  const [status, setStatus] = useState('All');
  const [booking, setBooking] = useState([]);
  const [bookingPage, setBookingPage] = useState(0);
  const [isDeleted, setDeleted] = useState(true);

  const adminId = useSelector((state) => state.user.userId);

  const disableBooking = (id) => {
    disableBookingAdminController(id).then((res) => {
      if (res.status === 200) {
        setDeleted(!isDeleted);
      }
    });
  };
  const handleChange = (event, newValue) => {
    setBookingPage(newValue);
  };

  useEffect(() => {
    bookingListController(adminId)
      .then((res) => {
        setBooking(res.data.bookings);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [isDeleted]);

  return (
    <>
      <AdminPageHeader />
      <AdminPageSideBar />
      <div className="admin-page-reservations">
        <h2>BOOKING LIST</h2>
        <div className="booking-selector">
          <Badge
            color="secondary"
            badgeContent={filterByStatus(booking, 'Close request').length}
          >
            <Tabs value={bookingPage} onChange={handleChange} centered>
              <Tab label="Bookings" />
              <Tab label="Close request" />
            </Tabs>
          </Badge>
        </div>
        <div className="report-input">
          {!bookingPage && (
            <>
              <h3 className="input-name">Status</h3>
              <select
                name="branch"
                id="branch"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th width="8%">Booking id</th>
              <th width="18%">Client name</th>
              <th width="15%">Phone number</th>
              <th width="17%">Location</th>
              <th width="10%">Pet Name</th>
              <th width="8%">Type</th>
              <th width="12%">Start date</th>
              <th width="12%">End date</th>
            </tr>
          </thead>
          <tbody>
            {filterByStatus(
              booking,
              bookingPage ? 'Close request' : status
            ).map((item) => (
              <>
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <th>{item.user_name}</th>
                  <th>{item.phone}</th>
                  <th>
                    {item.city}, {item.street}
                  </th>
                  <th>{item.name}</th>
                  <th>{item.type}</th>
                  <th>{item.booking_start.split('T')[0]}</th>
                  <th>{item.booking_end.split('T')[0]}</th>
                </tr>
                {bookingPage ? (
                  <button
                    type="submit"
                    className="MuiTabs-flexContainer Mui-selected"
                    style={{ padding: '4px 5px', margin: '4px 10px' }}
                    onClick={() => {
                      disableBooking(item.id);
                    }}
                  >
                    Close booking
                  </button>
                ) : null}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPageReservations;
