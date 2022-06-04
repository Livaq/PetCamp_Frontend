import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getFreeRooms = (id, start, end) =>
  new Promise((resolve) => {
    axiosInstance
      .get(`${serverURLS.GET_FREE_ROOMS}/${id}/${start}/${end}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => resolve(response))
      .catch((e) => resolve(e.response));
  });

export default getFreeRooms;
