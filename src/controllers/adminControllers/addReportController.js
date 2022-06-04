import axiosInstance from '../axiosInstance';
import serverURLS from '../serverURLS';

const addReportController = ({
  booking,
  writeTime,
  stressLevel,
  appetite,
  playTime,
  reportNumber,
}) =>
  new Promise((resolve) => {
    axiosInstance
      .post(
        `${serverURLS.ADD_REPORT}`,
        {
          booking,
          writeTime,
          stressLevel,
          appetite,
          playTime,
          reportNumber,
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

export default addReportController;
