import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './proceedBooking.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getFreeRooms from '../../../../controllers/clientControllers/common/getFreeRooms';
import BookingHotelItem from './bookingHotelItem/BookingHotelItem';
import infoIcon from '../../../../assets/icons/info-icon.png';

function ProceedBooking({
  next,
  transfer,
  setTransfer,
  grooming,
  setGrooming,
  total,
}) {
  const userId = useSelector((state) => state.user.userId);
  const campId = useSelector((state) => state.bookingForm.booking.campId);
  const start = useSelector((state) => state.bookingForm.booking.startDate);
  const end = useSelector((state) => state.bookingForm.booking.endDate);
  const [freeRooms, setFreeRooms] = useState(0);
  const [isVaccinated, setVaccinated] = useState(false);
  const [isAgreed, setAgreement] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getFreeRooms(campId, start.split('T')[0], end.split('T')[0])
      .then((res) => {
        if (res.status === 200) {
          setFreeRooms(res.data.freeRooms.length);
          setLoading(false);
        }
      })
      .catch((e) => console.log(e.message));
  });

  return (
    <div className="proceed-booking__wrap">
      <div className="proceed-booking__container">
        <div className="proceed-booking__inner-container">
          <div className="proceed-booking__header">Available hotels</div>
          <div className="proceed-booking__hotels-container">
            <BookingHotelItem freeRooms={freeRooms} isLoading={isLoading} />
          </div>
          {userId ? (
            <div>
              <div className="proceed-booking__additional-options_container">
                <div className="proceed-booking__additional-options_header">
                  Additional Options:
                </div>
                <div className="proceed-booking__additional-options_item">
                  <div className="proceed-booking__checkbox">
                    <label htmlFor="proceed-booking__pet-transfer-check">
                      <input
                        type="checkbox"
                        id="proceed-booking__pet-transfer-check"
                        onChange={() => setTransfer(!transfer)}
                      />
                      Pet transfer
                    </label>
                  </div>
                  <div className="proceed-booking__price">
                    <span>PRICE:</span>
                    <span>$ 5</span>
                  </div>
                </div>
                <div className="proceed-booking__additional-options_info">
                  <img src={infoIcon} alt="info" />
                  <span>manger will contact you to agree on details</span>
                </div>
                <div className="proceed-booking__additional-options_item">
                  <div className="proceed-booking__checkbox">
                    <label htmlFor="proceed-booking__grooming-check">
                      <input
                        type="checkbox"
                        id="proceed-booking__grooming-check"
                        onChange={() => setGrooming(!grooming)}
                      />
                      Pet grooming
                    </label>
                  </div>
                  <div className="proceed-booking__price">
                    <span>PRICE:</span>
                    <span>$ 2</span>
                  </div>
                </div>
              </div>
              <div className="proceed-booking__total-price">
                Total price: ${total}
              </div>
              <div className="proceed-booking__agreements_container">
                <div>I state that</div>
                <div className="proceed-booking__checkbox">
                  <label htmlFor="proceed-booking__vaccination-check">
                    <input
                      type="checkbox"
                      id="proceed-booking__vaccination-check"
                      checked={isVaccinated}
                      onChange={() => setVaccinated(!isVaccinated)}
                    />
                    My pet is vaccinated.
                  </label>
                </div>
                <div className="proceed-booking__checkbox">
                  <label htmlFor="proceed-booking__agreement-check">
                    <input
                      type="checkbox"
                      id="proceed-booking__agreement-check"
                      checked={isAgreed}
                      onChange={() => setAgreement(!isAgreed)}
                    />
                    I agree with Client Agreement
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="proceed-booking__unlogged">
              To get proceed with booking Log In please
            </div>
          )}

          <div className="proceed-booking__agreements-and-conditions">
            <img src={infoIcon} alt="info" />
            <span>
              For more details go to
              <strong>
                <NavLink to="/agreement"> Client Agreement </NavLink>
              </strong>
              and <strong>Pricing&Conditions</strong>
            </span>
          </div>
          {userId ? (
            <div className="proceed-booking__book-button-container">
              <button
                type="submit"
                className={
                  isAgreed && isVaccinated
                    ? 'proceed-booking__book-button'
                    : 'proceed-booking__book-button-disabled'
                }
                onClick={isAgreed && isVaccinated ? next : null}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

ProceedBooking.propTypes = {
  next: PropTypes.func.isRequired,
  transfer: PropTypes.bool.isRequired,
  setTransfer: PropTypes.func.isRequired,
  grooming: PropTypes.bool.isRequired,
  setGrooming: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
export default ProceedBooking;
