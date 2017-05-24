import * as React from 'react';

const style = require('./datePicker.css');

const DatePicker = ({ label, onChange, value, error }) => (
  <div className={style.container}>
    <label htmlFor={label}>{label}</label>
    <input
      className={style.datePicker}
      type="date"
      onChange={onChange}
      value={value}
    />
    {error && <h6 className={style.error} >{error}</h6>}
  </div>
);

DatePicker.propTypes = {
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
};

DatePicker.defaultProps = { error: '' };

export default DatePicker;
