import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const Checkbox = ({ label, errorMessage, ...rest }: CheckboxProps) => {
  return (
    <label className="flex items-center w-full " htmlFor={rest.id}>
      <input
        type="checkbox"
        className="checkbox checkbox-primary mr-2"
        {...rest}
      />
      <span className="cursor-pointer">{label}</span>
    </label>
  );
};
