import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getBookingsController = (id) =>
  new Promise((resolve) => {
    axiosInstance
      .get(`${serverURLS.GET_BOOKINGS}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getBookingsController;
