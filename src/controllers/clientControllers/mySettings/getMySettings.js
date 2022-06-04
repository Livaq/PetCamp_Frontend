import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getMySettings = (id) =>
  new Promise((resolve) => {
    axiosInstance
      .get(`${serverURLS.GET_MY_SETTINGS}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getMySettings;
