import axiosInstance from '../axiosInstance';
import serverURLS from '../serverURLS';

const getReportNumberController = (book) =>
  axiosInstance.get(serverURLS.GET_REPORTS_NUMBER, {
    params: { book },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export default getReportNumberController;
