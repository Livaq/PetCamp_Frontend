import React from 'react';
import AdminPageHeader from '../adminPageHeader/adminPageHeader';
import AdminPageSideBar from '../adminPageSideBar/adminPageSideBar';

import './adminPageEmployees.scss';

function AdminPageEmployees() {
  return (
    <>
      <AdminPageHeader />
      <AdminPageSideBar />
      <div className="admin-page-employees">
        <h2>Employees</h2>
        <div className="employees-input">
          <h3 className="input-name">Branch</h3>
          <select name="branch" id="branch">
            <option value="all">All</option>
            <option value="minsk">Minsk</option>
            <option value="gomel">Gomel</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th width="15%">Name</th>
              <th width="12%">Title</th>
              <th width="15%">Phone number</th>
              <th width="14%">Location</th>
              <th width="20%">Email</th>
              <th width="12%">Employment date</th>
              <th width="12%">Dissmisal date</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default AdminPageEmployees;
