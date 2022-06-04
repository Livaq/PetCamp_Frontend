import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import UserProfile from './userProfilePage/UserProfile';
import MyPetsPage from './myPetsPage/myPetsPage';
import MySettings from './userProfileSettings/MySettings';
import MyBookingsPage from '../myBookingsPage/MyBookingsPage';
import myReportsPage from './myReportsPage/myReportsPage';

function ClientPages() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/profile`} component={UserProfile} />
      <Route path={`${path}/pets`} component={MyPetsPage} />
      <Route path={`${path}/reports`} component={myReportsPage} />
      <Route path={`${path}/mySettings`} component={MySettings} />
      <Route path={`${path}/bookings`} component={MyBookingsPage} />
    </Switch>
  );
}

export default ClientPages;
