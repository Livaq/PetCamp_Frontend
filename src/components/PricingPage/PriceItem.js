import React from 'react';
import PropTypes from 'prop-types';
import './pricingPage.scss';

const PriceItem = ({ option }) => (
  <div className="pricing-page__rooms-price-container">
    <div className="pricing-page__rooms-price-header">{option.optionName}</div>
    <div className="price">
      <div>PRICE:</div>
      <div>{option.price}</div>
    </div>
  </div>
);

PriceItem.propTypes = {
  option: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default PriceItem;
