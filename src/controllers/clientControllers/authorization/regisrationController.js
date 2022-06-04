import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const registrationController = (
  email,
  password,
  role,
  username,
  middlename,
  surname,
  phone
) =>
  new Promise((resolve) => {
    axiosInstance
      .post(serverURLS.REGISTRATION, {
        email,
        password,
        role,
        username,
        middlename,
        surname,
        phone,
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default registrationController;
