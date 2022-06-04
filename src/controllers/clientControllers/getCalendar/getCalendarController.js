import axiosInstance from '../../axiosInstance';
import serverURLS from '../../serverURLS';

const getCalendar = (camp) =>
  axiosInstance.get(serverURLS.GET_CALENDAR, {
    params: { camp },
  });

export default getCalendar;
