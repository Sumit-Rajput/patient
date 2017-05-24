import * as React from 'react';

const style = require('./textArea.css');

const TextArea = ({ label, onChange, value, error }) => (
  <div className={style.container}>
    <label htmlFor={label}>{label}</label>
    <textarea
      className={style.textarea}
      onChange={onChange}
      value={value}
    />
    {error && <h6 className={style.error} >{error}</h6>}
  </div>
);

TextArea.propTypes = {
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
};

TextArea.defaultProps = { error: '' };

export default TextArea;
