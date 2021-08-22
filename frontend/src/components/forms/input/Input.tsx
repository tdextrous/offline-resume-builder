import React from 'react';

import './Form.scss';


interface Props {
  fieldName: string;
  label?: string;
  type: string;
  value: string;
  onChange: (evt: any) => void;
  onBlur?: (evt?: any) => void;
  errors?: string[];
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  fieldName,
  label,
  type,
  value,
  onChange,
  onBlur=() => {},
  errors,
  placeholder=""
}) => {
  return (
    <div className="form-field">
      <label htmlFor={fieldName} className="label">
        {label}
      </label>
      <input
        className="text-input"
        name={fieldName}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {errors && 
        <ul className="form__error-container">
          {errors.map((error) => (
            <li key={error} className="form__error">{error}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Input;
