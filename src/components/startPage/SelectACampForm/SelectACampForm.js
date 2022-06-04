import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import './selectACampForm.scss';
import './react-datepicker.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import YandexMap from './YandexMap/YandexMap';
import { setCamps } from '../../../slices/CampsSlice';
import { setBooking } from '../../../slices/bookingFormSlice';
import getAllCamps from '../../../controllers/clientControllers/common/getAllCamps';
import getCalendar from '../../../controllers/clientControllers/getCalendar/getCalendarController';
import { fixTimezoneOffset } from '../../../common/formatDate';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
];
const style = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const initialCamp = {
  id: '1',
  city: 'Minsk',
  street: 'Ponomarenko',
  latitude: '53.892925',
  longitude: '27.493793',
  type: 'CAT',
};

function SelectACampForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const camps = useSelector((state) => state.camps.camps);

  const [petType, setPetType] = useState('DOG');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [currentCamp, setCurrentCamp] = useState(initialCamp);
  const [requestedQuantity, setRequestedQuantity] = useState('1');
  const [calendarData, setCalendarData] = useState({});

  const MAX_AVAILBABLE_ROOMS = 10;

  const handleBook = () => {
    dispatch(
      setBooking({
        petType,
        quantity: requestedQuantity,
        city,
        street,
        // startDate,
        startDate: fixTimezoneOffset(
          new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
          )
        ),
        endDate: fixTimezoneOffset(
          new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
        ),
        campId: currentCamp.id,
      })
    );
    history.push('/booking');
  };

  useEffect(() => {
    getAllCamps().then((res) => {
      try {
        dispatch(setCamps(res.data.petCamps));
      } catch (e) {
        console.log('Some trouble with server!');
      }
    });
  }, []);

  useEffect(() => {
    const camp = camps.find((el) => el.street === street);
    if (camp) {
      setCurrentCamp(camp);

      getCalendar(camp.id).then((res) => {
        try {
          setCalendarData(res.data.calendarData);
        } catch (e) {
          throw new Error(`Some trouble with server: ${e.message}`);
        }
      });
    }
  }, [street]);

  const disabledDates = [];
  Object.keys(calendarData).forEach((item) => {
    if (MAX_AVAILBABLE_ROOMS - calendarData[item] < requestedQuantity) {
      const [year, month, day] = item.split('-');
      disabledDates.push(new Date(year, month - 1, day));
    }
  });

  return (
    <div className="select-a-camp">
      <div className="select-a-camp__content">
        <h2 className="select-camp-form__header">Select a camp</h2>
        <div className="select-a-camp__address-form">
          <div className="select-camp-form__address-data">
            <div className="checkbox__select-pet">
              <p className="checkbox__label">
                <input
                  type="checkbox"
                  name="dog"
                  onChange={() => setPetType('DOG')}
                  checked={petType === 'DOG'}
                />
                Dog
              </p>
              <p className="checkbox__label">
                <input
                  type="checkbox"
                  name="cat"
                  onChange={() => setPetType('CAT')}
                  checked={petType === 'CAT'}
                />
                Cat
              </p>
              <div className="input__quantity">
                <Select
                  classNamePrefix="mySelect"
                  className="input-container"
                  options={options}
                  styles={style}
                  value={options.filter(
                    (option) => option.value === requestedQuantity
                  )}
                  onChange={(value) => {
                    setRequestedQuantity(value.value);
                  }}
                  placeholder=""
                  size="3"
                />
                <p>Quantity</p>
              </div>
            </div>

            <div className="select-camp-form__select-address">
              <select
                name="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setStreet('');
                }}
              >
                <option value="">-- select a city --</option>
                {[...new Set(camps.map((el) => el.city))].map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <select
                name="street"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              >
                <option value="">-- select a street --</option>
                {camps
                  .filter((el) => (petType !== '' ? el.type === petType : true))
                  .filter((el) => (city !== '' ? el.city === city : true))
                  .map((el) => (
                    <option key={el.id} value={el.street}>
                      {el.street}
                    </option>
                  ))}
              </select>
            </div>
            <div className="select-camp-form__select-dates">
              <p className="form__label">Select dates</p>
              <div className="date-inputs">
                <DatePicker
                  selectsRange
                  dateFormat="dd.MM.yyyy"
                  startDate={startDate}
                  endDate={endDate}
                  excludeDates={disabledDates}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  minDate={new Date()}
                  placeholderText="Select period"
                />
                <button
                  className="check-button"
                  type="submit"
                  disabled={!(street && city && startDate && endDate)}
                  onClick={handleBook}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className="map-wrapper">
            <YandexMap currentCamp={currentCamp} mapZoom={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectACampForm;
