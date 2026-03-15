import React from 'react';

const InputField = ({ label, type, value, onChange, placeholder, id, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
        required={required}
      />
    </div>
  );
};

export default InputField;