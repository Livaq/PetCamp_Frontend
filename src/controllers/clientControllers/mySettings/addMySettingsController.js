import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const addMySettingsController = (
  userId,
  name,
  middlename,
  surname,
  email,
  city,
  street,
  phone
) =>
  new Promise((resolve) => {
    axiosInstance
      .put(
        serverURLS.ADD_SETTINGS,
        {
          userId,
          name,
          middlename,
          surname,
          email,
          city,
          street,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default addMySettingsController;
