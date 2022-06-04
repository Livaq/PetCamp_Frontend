import axiosInstance from '../axiosInstance';
import serverURLS from '../serverURLS';

const reportsListController = (manager) =>
  axiosInstance.get(serverURLS.REPORTS_LIST, {
    params: { manager },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export default reportsListController;
