import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const addPetController = ({
  owner,
  name,
  type,
  breed,
  gender,
  age,
  sterilized,
  passport,
  info,
}) =>
  new Promise((resolve) => {
    axiosInstance
      .post(
        `${serverURLS.ADD_PET}/${owner}`,
        {
          name,
          type,
          breed,
          gender,
          owner,
          age,
          sterilized,
          passport,
          info,
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

export default addPetController;
