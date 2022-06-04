import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const deletePetController = (id) =>
  new Promise((resolve) => {
    axiosInstance
      .delete(`${serverURLS.DELETE_PET}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default deletePetController;
