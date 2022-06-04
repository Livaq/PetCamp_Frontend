import React, { useEffect, useState } from 'react';

import './adminPageProfile.scss';
import { useDispatch, useSelector } from 'react-redux';
import adminImage from '../../../assets/images/admin.jpeg';
import AdminPageHeader from '../adminPageHeader/adminPageHeader';
import AdminPageSideBar from '../adminPageSideBar/adminPageSideBar';
import getMySettings from '../../../controllers/clientControllers/mySettings/getMySettings';
import { setUserSurname } from '../../../slices/UserSlice';

function AdminPageProfile() {
  const userId = useSelector((state) => state.user.userId);
  const [adminInfo, setAdminInfo] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    getMySettings(userId).then((res) => {
      setAdminInfo(res.data.mySettingsInfo[0]);
      dispatch(setUserSurname(res.data.mySettingsInfo[0].surname));
    });
  }, []);
  return (
    <>
      <AdminPageHeader />
      <AdminPageSideBar />
      <div className="admin-page-profile">
        <h2>My profile</h2>
        <div className="user-info">
          <img src={adminImage} alt="" className="user-photo" />
          <div className="contact-info">
            <h3 className="admin-name">
              {adminInfo.name} {adminInfo.surname}
            </h3>
            <h4 className="admin-role">Branch manager</h4>
            <ul className="admin-contacts">
              <li id="phone">{adminInfo.phone}</li>
              <li id="e-mail">{adminInfo.email}</li>
              <li id="location">
                {adminInfo.city}, {adminInfo.street}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPageProfile;
