import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  Ref,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputComponent = (
  { className, type, required, placeholder, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
): ReactElement => {
  return (
    <input
      autoComplete="off"
      ref={ref}
      type={type ?? 'text'}
      className={'w-full p-4 rounded-md shadow-sm outline-none'}
      placeholder={`${placeholder} ${required ? '*' : ''}`}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputComponent);
