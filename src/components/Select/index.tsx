import React, { ReactElement, forwardRef, Ref } from 'react';
import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  options?: any[];
  textProperty?: string;
  valueProperty?: string;
}

const SelectComponent = (
  {
    label,
    errorMessage,
    options,
    textProperty = 'text',
    valueProperty = 'value',
    ...rest
  }: SelectProps,
  ref: Ref<HTMLSelectElement>
): ReactElement => {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={rest.id} className="label">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className="select select-bordered select-ghost"
        {...rest}
      >
        <option selected disabled>
          Select one option...
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option[valueProperty]}>
            {option[textProperty]}
          </option>
        ))}
      </select>
    </div>
  );
};

export const Select = forwardRef(SelectComponent);
