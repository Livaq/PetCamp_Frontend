function str0l(val, len) {
  let strVal = val.toString();
  while (strVal.length < len) strVal = `0${strVal}`;
  return strVal;
}

function formatDate(dt) {
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  return `${str0l(day, 2)}.${str0l(month, 2)}.${year}`;
}

export const fixTimezoneOffset = (date) => {
  if (!date) return '';
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON();
};

export const parseDate = (date) => date.toISOString().split('T')[0];

export const stringToDate = (date) => date.split('T')[0].split('-').join('.');

export default formatDate;
