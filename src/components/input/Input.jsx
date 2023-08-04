import './Input.css';
import React from 'react';
import { Controller } from 'react-hook-form';

const Input = ({ id, label, type, name, placeholder, validation, error }) => {
  return (
    <div className='d-flex flex-column' id='input-group'>
      <label htmlFor={id}>{label}</label>
      <Controller
        name={name}
        control={validation.control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            id={id}
            type={type}
            className='rounded input-component'
            placeholder={placeholder}
          />
        )}
      />
      {error && <span className='error-message'>{error.message}</span>}
    </div>
  );
};

export default Input;
