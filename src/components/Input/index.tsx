import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  Ref,
} from 'react';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const InputComponent = (
  {
    label,
    errorMessage,
    className,
    type,
    required,
    placeholder,
    ...rest
  }: InputProps,
  ref: Ref<HTMLInputElement>
): ReactElement => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        autoComplete="off"
        ref={ref}
        type={type ?? 'text'}
        className={classNames(
          'w-full p-4 rounded-md shadow-sm outline-none',
          errorMessage && 'border border-red-400 placeholder:text-red-500'
        )}
        placeholder={`${placeholder} ${required ? '*' : ''}`}
        {...rest}
      />
      {errorMessage ? (
        <p className="text-red-500 text-sm font-thin">{errorMessage}</p>
      ) : null}
    </>
  );
};

export const Input = forwardRef(InputComponent);
