import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getBookingSection = (id) =>
  new Promise((resolve) => {
    axiosInstance
      .get(`${serverURLS.GET_BOOKING_SECTION}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getBookingSection;
