import axiosInstance from '../axiosInstance';
import serverURLS from '../serverURLS';

const roomsListController = (manager, date) =>
  axiosInstance.get(serverURLS.ROOMS_LIST, {
    params: { manager, date },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export default roomsListController;
