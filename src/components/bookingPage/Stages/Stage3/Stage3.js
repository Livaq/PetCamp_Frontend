import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import catType from '../../../../assets/images/catType.jpeg';
import dogType from '../../../../assets/images/dogType.jpeg';
import PetInfoComponent from './PetInfo';
import { setRoom } from '../../../../slices/bookingFormSlice';
import getFreeRooms from '../../../../controllers/clientControllers/common/getFreeRooms';
import formatDate from '../../../../common/formatDate';
import PetType from '../../../../common/PetType';

const Stage3 = ({ prev, next, total }) => {
  const dispatch = useDispatch();
  const bookingInfo = useSelector((state) => state.bookingForm);
  const campId = useSelector((state) => state.bookingForm.booking.campId);
  const start = useSelector((state) => state.bookingForm.booking.startDate);
  const end = useSelector((state) => state.bookingForm.booking.endDate);

  useEffect(() => {
    getFreeRooms(campId, start.split('T')[0], end.split('T')[0])
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setRoom(res.data.freeRooms.slice(0, bookingInfo.pets.length))
          );
        }
      })
      .catch((e) => console.log(e.message));
  }, []);
  const handleBook = () => {
    next();
  };

  return (
    <>
      <div className="stage-container">
        <div className="booking-content_head">
          <h2 className="stage-title">Make a payment</h2>
          <button type="button" className="go-back" onClick={prev}>
            Go back
          </button>
        </div>
        <div className="pets-booking">
          {bookingInfo.pets.map((item, index) => (
            <>
              <div className="pets-booking-item" key={item.id}>
                <img
                  src={
                    item.type.toLowerCase() === PetType.cat ? catType : dogType
                  }
                  alt=""
                  className="pets-booking-item_img"
                />
                <PetInfoComponent pet={item} />
              </div>
              <div className="booking-info">
                <div className="booking-info_item">
                  <div className="param">Booking dates</div>
                  <div className="value">
                    {formatDate(new Date(bookingInfo.booking.startDate))}-
                    {formatDate(new Date(bookingInfo.booking.endDate))}
                  </div>
                </div>
                <div className="booking-info_item">
                  <div className="param">Room</div>
                  <div className="value">
                    Room&nbsp;
                    {bookingInfo.rooms[index]
                      ? bookingInfo.rooms[index].room_number
                      : '1'}
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
          <div className="booking-info_item-price">
            <div className="param">Price</div>
            <div className="value">${total}</div>
          </div>

          <button type="button" className="next-stage" onClick={handleBook}>
            Book
          </button>
        </div>
      </div>
    </>
  );
};

Stage3.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Stage3;
