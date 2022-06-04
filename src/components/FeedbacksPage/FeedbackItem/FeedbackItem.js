import React from 'react';
import PropTypes from 'prop-types';
import './feedbackItem.scss';
import starIcon from '../../../assets/icons/Star.png';

const FeedbackItem = ({ userName, voteDate, voteScore, voteText }) => {
  const score = [];
  for (let i = 0; i < voteScore; i += 1) {
    score.push(<img key={i} src={starIcon} alt="vote start" />);
  }
  return (
    <div className="feedback-item__container">
      <div className="feedback-item__header">
        <div className="feedback-item__user-name">{userName}</div>
        <div className="feedback-item__vote-date">{voteDate}</div>
        <div>{score.map((item) => item)}</div>
      </div>
      <div className="feedback-item__content">{voteText}</div>
    </div>
  );
};

FeedbackItem.propTypes = {
  userName: PropTypes.string.isRequired,
  voteDate: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  voteText: PropTypes.string.isRequired,
};

export default FeedbackItem;
