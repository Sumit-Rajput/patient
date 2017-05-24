import * as React from 'react';

const style = require('./select.css');

const Select = ({ label, options, onChange, value }) => (
  <div className={style.container}>
    <label htmlFor={label}>{label}</label>
    <select className={style.select} value={value} onChange={onChange}>
      {(options || []).map(item => (
        <option key={item} value={item}>{item}</option>
        ))
      }
    </select>
  </div>
);

Select.propTypes = {
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default Select;
