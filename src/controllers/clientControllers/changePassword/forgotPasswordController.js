import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const forgotPasswordController = (email) =>
  new Promise((resolve) => {
    axiosInstance
      .post(serverURLS.FORGOT_PASSWORD, {
        email,
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default forgotPasswordController;
