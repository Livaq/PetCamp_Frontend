import axiosInstance from '../axiosInstance';
import serverURLS from '../serverURLS';

const getPetController = (petId) =>
  axiosInstance.get(`${serverURLS.GET_PET}/${petId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export default getPetController;
