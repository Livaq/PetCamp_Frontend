import React, { useEffect, useState } from 'react';
import './userProfile.scss';
import { useSelector } from 'react-redux';
import HeaderUserProfilePage from '../headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../../startPage/startPageFooter/startPageFooter';
import userAvatar from '../../../assets/images/user-profile-avatar.png';
import Pencil from '../../../assets/icons/pensil.png';
import UserProfilePageMyPetBoard from './myPetBoard/UserProfilePageMyPetBoard';
import UserProfilePageMyReportsBoard from './myReportsBoard/UserProfilePageMyReportsBoard';
import UserProfilePageMyBookingBoard from './myBookingBoard/UserProfilePageMyBookingBoard';
import getBookingSection from '../../../controllers/clientControllers/profile/getBookingSection';

function UserProfile() {
  const [pets, setPets] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((state) => state.user.userId);
  const userName = useSelector((state) => state.user.userName);
  useEffect(() => {
    getBookingSection(userId).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        setBookings(res.data.bookingsInfo);
        setPets(res.data.petsInfo);
        setReports(res.data.reportsInfo);
      } else {
        setBookings([]);
        setPets([]);
        setReports([]);
      }
    });
  }, []);

  return (
    <>
      <div className="user-profile-wrap">
        <HeaderUserProfilePage />
        <div className="user-profile__main">
          <div className="user-profile__banner" />
          <div className="user-profile__content">
            <div className="user-profile__main__avatar-container">
              <img src={userAvatar} alt="user-avatar" />
              <img className="pencil" src={Pencil} alt="pencil" />
              <p className="user-profile__main__name">{userName}</p>
            </div>
            <div className="user-profile__content-container">
              <div className="user-profile__top-content">
                <UserProfilePageMyPetBoard pets={pets} isLoading={isLoading} />
                <UserProfilePageMyBookingBoard
                  bookings={bookings}
                  isLoading={isLoading}
                />
              </div>
              <div className="user-profile__bottom-content">
                <UserProfilePageMyReportsBoard
                  isLoading={isLoading}
                  reports={reports}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default UserProfile;
