import React, { ReactElement, forwardRef, Ref } from 'react';
import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  options?: any[];
}

const SelectComponent = (
  { label, errorMessage, options, ...rest }: SelectProps,
  ref: Ref<HTMLSelectElement>
): ReactElement => {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={rest.id} className="label">
          {label}
        </label>
      )}
      <select ref={ref} className="select select-bordered" {...rest}>
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

export const Select = forwardRef(SelectComponent);
