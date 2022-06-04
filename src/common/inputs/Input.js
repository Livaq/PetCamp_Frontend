import React from 'react';
import PropTypes from 'prop-types';

function Input({
  id,
  type,
  className,
  placeHolder,
  value,
  onChange,
  valid,
  login,
  htmlFor,
  name,
}) {
  return (
    <label
      className={`label ${
        value.length > 0 && (!valid ? 'invalid-input' : 'valid-input')
      }`}
      style={{ display: login ? 'none' : 'block' }}
      htmlFor={htmlFor}
    >
      <div className="authorisation__labels">{name}</div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeHolder}
      />
    </label>
  );
}
Input.propTypes = {
  id: PropTypes.func.isRequired,
  type: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
  placeHolder: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  htmlFor: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
};
export default Input;
