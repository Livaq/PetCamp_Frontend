import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const addBookController = (
  user,
  pets,
  camp,
  bookingStart,
  bookingEnd,
  isActive = true,
  rooms
) =>
  new Promise((resolve) => {
    axiosInstance
      .post(
        serverURLS.ADD_BOOKING,
        {
          user,
          pets,
          camp,
          bookingStart,
          bookingEnd,
          isActive,
          rooms,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default addBookController;
