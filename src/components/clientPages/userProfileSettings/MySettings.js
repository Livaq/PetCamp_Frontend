import React, { useEffect, useState } from 'react';
import './mySettings.scss';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import HeaderUserProfilePage from '../headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../../startPage/startPageFooter/startPageFooter';
import userAvatar from '../../../assets/images/user-profile-avatar.png';
import Pencil from '../../../assets/icons/pensil.png';
import getMySettings from '../../../controllers/clientControllers/mySettings/getMySettings';
import addMySettingsController from '../../../controllers/clientControllers/mySettings/addMySettingsController';
import { setUserName } from '../../../slices/UserSlice';

function MySettings() {
  const [settings, setSettings] = useState({});
  const [isChange, setIsChange] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const changeData = () => {
    const { name, middlename, surname, email, city, street, phone } = settings;
    addMySettingsController(
      userId,
      name,
      middlename,
      surname,
      email,
      city,
      street,
      phone
    ).then((res) => console.log(res.data));
    dispatch(setUserName(name));
  };

  const handleSettings = () => {
    if (isChange) {
      changeData();
    }
    setIsChange((state) => !state);
  };

  useEffect(() => {
    getMySettings(userId).then((res) => {
      if (res.status === 200) {
        setSettings(res.data.mySettingsInfo[0]);
      }
    });
  }, []);

  return (
    <>
      <div className="user-profile-wrap">
        <HeaderUserProfilePage />
        <div className="user-profile__main">
          <div className="user-profile__banner">
            <img className="pencil-banner" src={Pencil} alt="pencil" />
          </div>
          <div className="user-profile__content">
            <div className="user-profile__main__avatar-container">
              <img src={userAvatar} alt="user-avatar" />
              <img className="pencil" src={Pencil} alt="pencil" />
              <p className="user-profile__main__name">{settings?.name}</p>
            </div>
            <div className="my-setting__content-container">
              <div className="my-setting__container">
                <h2>My settings</h2>
                <div className="my-setting__inputs">
                  <label htmlFor="name" className="my-settings__label">
                    <div>Name</div>
                    {isChange ? (
                      <input
                        className="my-settings__input"
                        id="name"
                        type="text"
                        value={settings?.name ? settings.name : ''}
                        onChange={(e) =>
                          setSettings((state) => ({
                            ...state,
                            name: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p>{settings?.name}</p>
                    )}
                  </label>
                  <label htmlFor="middle-name" className="my-settings__label">
                    <div>Middle name</div>
                    {isChange ? (
                      <input
                        className="my-settings__input"
                        id="middle-name"
                        type="text"
                        value={settings?.middlename ? settings?.middlename : ''}
                        onChange={(e) =>
                          setSettings((state) => ({
                            ...state,
                            middlename: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p>{settings?.middlename}</p>
                    )}
                  </label>
                  <label htmlFor="surname" className="my-settings__label">
                    <div>Surname</div>
                    {isChange ? (
                      <input
                        className="my-settings__input"
                        id="surname"
                        type="text"
                        value={settings?.surname ? settings?.surname : ''}
                        onChange={(e) =>
                          setSettings((state) => ({
                            ...state,
                            surname: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p>{settings?.surname}</p>
                    )}
                  </label>
                  <label htmlFor="e-mail" className="my-settings__label">
                    <div>e-mail</div>
                    <p>{settings.email}</p>
                  </label>
                  <label htmlFor="city" className="my-settings__label">
                    <div>City</div>
                    {isChange ? (
                      <input
                        className="my-settings__input"
                        id="city"
                        type="text"
                        value={settings?.city ? settings.city : ''}
                        onChange={(e) =>
                          setSettings((state) => ({
                            ...state,
                            city: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p>{settings?.city}</p>
                    )}
                  </label>
                  <label htmlFor="street" className="my-settings__label">
                    <div>Street, bld</div>
                    {isChange ? (
                      <input
                        className="my-settings__input"
                        id="street"
                        type="text"
                        value={settings?.street ? settings.street : ''}
                        onChange={(e) =>
                          setSettings((state) => ({
                            ...state,
                            street: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p>{settings?.street}</p>
                    )}
                  </label>
                  <label htmlFor="mobile-phone" className="my-settings__label">
                    <div>Mobile phone</div>
                    {isChange ? (
                      <input
                        className="my-settings__input"
                        id="mobile-phone"
                        type="text"
                        value={settings?.phone ? settings.phone : ''}
                        onChange={(e) =>
                          setSettings((state) => ({
                            ...state,
                            phone: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p>{settings?.phone}</p>
                    )}
                  </label>
                </div>
                <button
                  className="my-settings__submit-button"
                  type="submit"
                  onClick={handleSettings}
                >
                  {isChange ? 'Submit' : 'Change'}
                </button>
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

export default MySettings;
