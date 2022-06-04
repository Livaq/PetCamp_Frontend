import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getAllCamps = () =>
  new Promise((resolve) => {
    axiosInstance
      .get(serverURLS.GET_CAMPS)
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getAllCamps;
