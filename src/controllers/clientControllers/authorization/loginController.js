import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const loginController = (email, password, role) =>
  new Promise((resolve) => {
    axiosInstance
      .post(serverURLS.LOGIN, {
        email,
        password,
        role,
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default loginController;
