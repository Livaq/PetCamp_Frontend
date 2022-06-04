import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import AdminPage from './components/adminPage/adminPage';
import ClientPages from './components/clientPages/ClientPages';
import Activation from './components/common/activation/Activation';
import StartPage from './components/startPage/StartPage';
import BookingPage from './components/bookingPage/BookingPage';
import checkTokenExp from './services/accessToken/checkTokenExp';
import getTokenData from './services/accessToken/getTokenData';
import { setUserId, setUserName } from './slices/UserSlice';
import PricingPage from './components/PricingPage/PricingPage';
import FeedbacksPage from './components/FeedbacksPage/FeedbacksPage';
import ContactPage from './components/ContactPage/ContactPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ClientAgreement from './components/clientAgreementPage/ClientAgreement';
import ForgotPassword from './components/common/forgotPassword/ForgotPassword';

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      if (checkTokenExp(token)) {
        const { id, name } = getTokenData(token);
        dispatch(setUserId(id));
        dispatch(setUserName(name));
      } else {
        dispatch(setUserId(''));
        dispatch(setUserName(''));
        localStorage.removeItem('token');
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      if (!checkTokenExp(token)) {
        dispatch(setUserId(''));
      }
    }
  });

  return (
    <>
      <Route path="/" exact>
        <StartPage />
      </Route>
      <Route path="/pricing" exact>
        <PricingPage />
      </Route>
      <Route path="/feedbacks" exact>
        <FeedbacksPage />
      </Route>
      <Route path="/contacts" exact>
        <ContactPage />
      </Route>
      <Route path="/aboutUs" exact>
        <AboutUsPage />
      </Route>
      <Route path="/client">
        {userId ? <ClientPages /> : <Redirect to={{ pathname: '/' }} />}
      </Route>
      <Route path="/booking">
        <BookingPage />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route path="/agreement">
        <ClientAgreement />
      </Route>
      <Route path="/activation/:token">
        <Activation />
      </Route>
      <Route path="/forgot-password/:id">
        <ForgotPassword />
      </Route>
    </>
  );
}

export default App;
