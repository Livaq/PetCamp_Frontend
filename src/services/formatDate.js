export const str0l = (val, len) => {
  let strVal = val.toString();
  while (strVal.length < len) strVal = `0${strVal}`;
  return strVal;
};

export const formatDateTime = (dt) => {
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  return `${str0l(day, 2)}.${str0l(month, 2)}.${year}`;
};

// export default formatDateTime;
