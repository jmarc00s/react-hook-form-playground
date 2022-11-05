import React, { ReactElement } from 'react';
import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  options?: any[];
}

export const Select = ({
  label,
  errorMessage,
  options,
  ...rest
}: SelectProps): ReactElement => {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={rest.id} className="label">
          {label}
        </label>
      )}
      <select className="select select-bordered" {...rest}>
        <option selected disabled>
          Select one option...
        </option>
        {options?.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
