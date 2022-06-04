import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './contactPage.scss';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../startPage/startPageFooter/startPageFooter';
import getAllCamps from '../../controllers/clientControllers/common/getAllCamps';
import { setCamps } from '../../slices/CampsSlice';
import YandexMap from '../startPage/SelectACampForm/YandexMap/YandexMap';
import CatCamps from './CatCamps';
import DogCamps from './DogCamps';

const initialCamp = {
  id: '1',
  city: 'Minsk',
  street: 'Ponomarenko',
  latitude: '53.892925',
  longitude: '27.493793',
  type: 'CAT',
};

const ContactPage = () => {
  const [currentCamp, setCurrentCamp] = useState(initialCamp);
  const [mapZoom, setMapZoom] = useState(10);
  const [catAddresses, setCatAddresses] = useState([]);
  const [dogAddresses, setDogAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCamps().then((res) => {
      if (res.status === 200) {
        const allAddresses = res.data.petCamps;
        dispatch(setCamps(res.data.petCamps));
        setCatAddresses(allAddresses.filter((item) => item.type === 'CAT'));
        setDogAddresses(allAddresses.filter((item) => item.type === 'DOG'));
        setIsLoading(false);
      } else {
        setCatAddresses([]);
        setDogAddresses([]);
      }
    });
  }, []);

  return (
    <div>
      <HeaderUserProfilePage />
      <div className="contact-page__wrap">
        <div className="contact-page__container">
          <h2>Contacts</h2>
          <div className="contact-page__contacts-wrap">
            <CatCamps
              isLoading={isLoading}
              catAddresses={catAddresses}
              setCurrentCamp={setCurrentCamp}
              setMapZoom={setMapZoom}
            />
            <DogCamps
              isLoading={isLoading}
              dogAddresses={dogAddresses}
              setCurrentCamp={setCurrentCamp}
              setMapZoom={setMapZoom}
            />
          </div>
          <div className="contact-page__map-container">
            <YandexMap currentCamp={currentCamp} mapZoom={mapZoom} />
          </div>
          <div className="contact-page__webpage-info-container">
            <div>“Pet Camp”</div>
            <div>A hotel chain for cats and dogs</div>
            <div>
              222222, Nezavisimosty avenue, bld.140, room20 tel.+375294444444
            </div>
            <div>2020-2022 All rights reserved</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactPage;
