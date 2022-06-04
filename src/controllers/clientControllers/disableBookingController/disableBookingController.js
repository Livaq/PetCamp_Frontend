import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const disableBookingController = (id) =>
  new Promise((resolve) => {
    axiosInstance
      .delete(`${serverURLS.DISABLE_BOOKIGN}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default disableBookingController;
