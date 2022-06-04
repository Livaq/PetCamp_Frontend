import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const changePasswordController = (id, password) =>
  new Promise((resolve) => {
    axiosInstance
      .post(serverURLS.CHANGE_PASSWORD, {
        id,
        password,
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default changePasswordController;
