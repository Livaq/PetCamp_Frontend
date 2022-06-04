import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import reportsListController from '../../../controllers/adminControllers/reportsListController';
import { stringToDate, fixTimezoneOffset } from '../../../common/formatDate';
import AdminPageHeader from '../adminPageHeader/adminPageHeader';
import AdminPageSideBar from '../adminPageSideBar/adminPageSideBar';
import ParticularReport from './ParticularReport/ParticularReport';

import './adminPageReports.scss';

function AdminPageReports() {
  const managerId = useSelector((state) => state.user.userId);
  const [reports, setReports] = useState([]);
  const [status, setStatus] = useState('All');
  const [room, setRoom] = useState('All');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(async () => {
    const reportsRes = await reportsListController(managerId)
      .then((res) => res.data.reports)
      .then((rep) =>
        rep.map((item) => ({
          ...item,
          write_time: stringToDate(item.write_time),
          booking_start: stringToDate(item.booking_start),
          booking_end: stringToDate(item.booking_end),
        }))
      );
    setReports(reportsRes);
  }, []);

  useEffect(() => {
    setStart(stringToDate(fixTimezoneOffset(startDate)));
  }, [startDate]);

  useEffect(() => {
    setEnd(stringToDate(fixTimezoneOffset(endDate)));
  }, [endDate]);

  const filterByStatus = (arr) => {
    if (status === 'All') {
      return arr;
    }
    return arr.filter((item) =>
      item.is_deleted ? status === 'Inactive' : status === 'Active'
    );
  };

  const filterByRoom = (arr) => {
    if (room === 'All') {
      return arr;
    }
    return arr.filter((item) => `${item.room_number}` === room);
  };

  const filterByDate = (arr) => {
    if (!start && !end) {
      return arr;
    }
    if (start && !end) {
      return arr.filter((item) => start <= item.write_time);
    }
    return arr.filter(
      (item) => start <= item.write_time && item.write_time <= end
    );
  };

  const filtering = (arr) => filterByDate(filterByRoom(filterByStatus(arr)));

  const { path } = useRouteMatch();

  return (
    <>
      <AdminPageHeader />
      <AdminPageSideBar />
      <div className="admin-page-reports">
        <h2>
          <NavLink to="/admin/reports">Reports</NavLink>
        </h2>
        <Switch>
          <Route path="/admin/reports/:booking/:number">
            <ParticularReport reports={reports} />
          </Route>
          <Route path="/admin/reports">
            <div className="inputs">
              <div className="report-input">
                <h3 className="input-name">Status</h3>
                <select
                  name="status"
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Active">active</option>
                  <option value="Inactive">inactive</option>
                </select>
              </div>
              <div className="report-input">
                <h3 className="input-name">Room</h3>
                <select
                  name="room"
                  id="room"
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="report-input input-calendar">
                <h3 className="input-name">Dates</h3>
                <DatePicker
                  className="datepicker"
                  selectsRange
                  dateFormat="yyyy.MM.dd"
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  placeholderText="yyyy.mm.dd - yyyy.mm.dd "
                />
                <div className="calendar" />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th width="9%">Booking №</th>
                  <th width="9%">Status</th>
                  <th width="9%">Report №</th>
                  <th width="13%">Date of report</th>
                  <th width="13%">Pet name</th>
                  <th width="9%">Pet type</th>
                  <th width="12%">Option</th>
                  <th width="13%">Start date</th>
                  <th width="13%">End date</th>
                </tr>
              </thead>
              <tbody>
                {filtering(reports).map((item) => (
                  <tr key={item.id}>
                    <th>{item.booking_id}</th>
                    <th>{item.is_deleted ? 'Inactive' : 'Active'}</th>
                    <th>
                      <NavLink
                        to={`${path}/${item.booking_id}/${item.report_number}`}
                      >
                        {item.report_number}
                      </NavLink>
                    </th>
                    <th>{item.write_time}</th>
                    <th>{item.name}</th>
                    <th>{item.type.toLowerCase()}</th>
                    <th>standard room</th>
                    <th>{item.booking_start}</th>
                    <th>{item.booking_end}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default AdminPageReports;
