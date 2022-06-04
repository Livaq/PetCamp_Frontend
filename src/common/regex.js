export const PHONE_VALIDATION =
  /^(\+375|80)(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/;
export const EMAIL_VALIDATION =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_VALIDATION =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[.,:;?!*+%\-<>@[\]{}/\\$#()])[a-zA-Z0-9.,;:?!*+%\-<>@[\]{}/\\$#()]{8,14}$/;
export const NAME_VALIDATION = /([a-zA-Z])/;
export const PET_PASSPORT_VALIDATION = /^\d{2}-\d{4}$/;
