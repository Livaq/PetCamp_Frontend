const capitalizeFirstLetter = (str) =>
  str.length > 1
    ? str[0].toUpperCase() + str.slice(1).toLowerCase()
    : str.toUpperCase();

export default capitalizeFirstLetter;
