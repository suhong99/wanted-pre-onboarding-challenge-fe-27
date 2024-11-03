import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input-field"
  />
);

export default AuthInput;
