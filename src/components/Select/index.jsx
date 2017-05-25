import * as React from 'react';

const style = require('./select.css');

const Select = ({ label, options, onChange, value, error }) => (
  <div className={style.container}>
    <label htmlFor={label}>{label}</label>
    <select className={style.select} value={value} onChange={onChange}>
      <option value="" disabled>Select your option</option>
      {(options || []).map(item => (
        <option key={item} value={item}>{item}</option>
        ))
      }
    </select>
    {error && <h6 className={style.error} >{error}</h6>}
  </div>
);

Select.propTypes = {
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
};

Select.defaultProps = { error: '' };

export default Select;
