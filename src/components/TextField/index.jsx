import * as React from 'react';

const style = require('./textField.css');

const TextField = ({ label, onChange, value, error }) => (
  <div className={style.container}>
    <label htmlFor={label}>{label}</label>
    <input
      type="text"
      onChange={onChange}
      value={value}
    />
    {error && <h6 className={style.error} >{error}</h6>}
  </div>
);

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
};

TextField.defaultProps = { error: '' };

export default TextField;
