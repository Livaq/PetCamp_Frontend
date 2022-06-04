import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AdminPageProfile from './adminPageProfile/adminPageProfile';
import AdminPageReports from './adminPageReports/adminPageReports';
import AdminPageEmployees from './adminPageEmployees/adminPageEmployees';
import AdminPageReservations from './adminPageReservations/adminPageReservations';
import AdminPageRooms from './adminPageRooms/adminPageRooms';
import './adminPage.scss';
import EmployeeAuthorisation from '../common/employeeAuthorisation/EmployeeAuthorisation';

function AdminPage() {
  const { path } = useRouteMatch();
  const userId = useSelector((state) => state.user.userId);
  return (
    <div className="admin-page">
      <Switch>
        <Route
          path={`${path}/profile`}
          component={userId ? AdminPageProfile : EmployeeAuthorisation}
        />
        <Route
          path={`${path}/reports`}
          component={userId ? AdminPageReports : EmployeeAuthorisation}
        />
        <Route
          path={`${path}/employees`}
          component={userId ? AdminPageEmployees : EmployeeAuthorisation}
        />
        <Route
          path={`${path}/reservations`}
          component={userId ? AdminPageReservations : EmployeeAuthorisation}
        />
        <Route
          path={`${path}/rooms`}
          component={userId ? AdminPageRooms : EmployeeAuthorisation}
        />
        <Route exact path={`${path}/`} component={EmployeeAuthorisation} />
      </Switch>
    </div>
  );
}

export default AdminPage;
