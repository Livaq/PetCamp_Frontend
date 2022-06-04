import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getReportsController = (id) =>
  new Promise((resolve) => {
    axiosInstance
      .get(`${serverURLS.GET_REPORTS}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getReportsController;
