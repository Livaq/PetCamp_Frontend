import React from 'react';
import './feedbacksPage.scss';
import starIcon from '../../assets/icons/Star.png';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../startPage/startPageFooter/startPageFooter';
import votes from './votes';
import FeedbackItem from './FeedbackItem/FeedbackItem';

const FeedbacksPage = () => (
  <div>
    <HeaderUserProfilePage />
    <div className="feedbacks-page__wrap">
      <div className="feedbacks-page__container">
        <div className="feedbacks-page__header">
          <h2>Feedbacks</h2>
          <div className="feedbacks-page__votes-summary">
            <img src={starIcon} alt="vote star" />
            <span>4.9</span>
            <span>(543 votes)</span>
          </div>
        </div>
        <div className="feedbacks-page__votes-container">
          {votes.map((item) => (
            <FeedbackItem
              key={item.userName}
              userName={item.userName}
              voteDate={item.voteDate}
              voteScore={item.voteScore}
              voteText={item.voteText}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default FeedbacksPage;
