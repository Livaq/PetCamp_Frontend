import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const activationController = (id, name, role) =>
  new Promise((resolve) => {
    axiosInstance
      .put(serverURLS.ACTIVATION, {
        id,
        name,
        role,
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default activationController;
