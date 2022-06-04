import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getPets = (id, type) =>
  new Promise((resolve) => {
    axiosInstance
      .get(`${serverURLS.GET_PETS}/${type}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getPets;
