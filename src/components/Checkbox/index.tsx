import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const Checkbox = ({ label, errorMessage, ...rest }: CheckboxProps) => {
  return (
    <label htmlFor={rest.id}>
      <input type="checkbox" className="checkbox checkbox-primary" {...rest} />
      {label}
    </label>
  );
};
