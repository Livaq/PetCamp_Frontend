import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminPageHeader from '../adminPageHeader/adminPageHeader';
import AdminPageSideBar from '../adminPageSideBar/adminPageSideBar';
import PetCard from './petCard';
import roomsListController from '../../../controllers/adminControllers/roomsListController';
import EmptyRoom from './emptyRoom';
import OccupiedRoom from './occupiedRoom';

import './adminPageRooms.scss';
import { parseDate } from '../../../common/formatDate';

function AdminPageRooms() {
  const userId = useSelector((state) => state.user.userId);
  const [occupiedRooms, setOccupiedRooms] = useState([]);
  const [type, setType] = useState('');
  const [occupiedList, setOccupiedList] = useState([]);
  const [status, setStatus] = useState('All');

  useEffect(async () => {
    const currentTimeISO = parseDate(new Date());
    const typeAndRoomsInfo = await roomsListController(
      userId,
      currentTimeISO
    ).then((res) => res.data.typeAndRoomsInfo);
    setType(typeAndRoomsInfo.type);
    setOccupiedRooms(typeAndRoomsInfo.rooms);

    setOccupiedList(typeAndRoomsInfo.rooms.map((item) => item.room_number));
  }, []);

  const roomsArray = [];

  for (let i = 1; i <= 10; i += 1) {
    if (occupiedList.includes(i)) {
      roomsArray.push(occupiedRooms.find((el) => el.room_number === i));
    } else {
      roomsArray.push(null);
    }
  }

  return (
    <>
      <AdminPageHeader />
      <AdminPageSideBar />
      <div className="admin-page-rooms">
        <h2>
          <NavLink to="/admin/rooms">Rooms</NavLink>
        </h2>
        <Switch>
          <Route path="/admin/rooms/:petId">
            <PetCard />
          </Route>
          <Route path="/admin/rooms">
            <div className="report-input">
              <h3 className="input-name">Status</h3>
              <select
                name="status"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <h4>{type}</h4>
            <div className="rooms">
              {roomsArray.map((item, i) => {
                if (item && status !== 'Inactive') {
                  return (
                    <OccupiedRoom
                      num={i + 1}
                      petId={item.pet_id}
                      name={item.name}
                      booking={item.id}
                    />
                  );
                }
                if (!item && status !== 'Active') {
                  return <EmptyRoom num={i + 1} />;
                }
                return null;
              })}
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default AdminPageRooms;
