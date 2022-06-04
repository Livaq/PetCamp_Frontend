import axiosInstance from '../axiosInstance';
import serverURLS from '../serverURLS';

const bookingListController = (id) =>
  axiosInstance.get(`${serverURLS.BOOKING_LIST}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export default bookingListController;
