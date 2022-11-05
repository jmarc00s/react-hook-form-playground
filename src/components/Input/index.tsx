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
  { label, errorMessage, className, type, required, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
): ReactElement => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label" htmlFor={rest.id}>
          <span className="label-text">
            {label}
            {required ? (
              <span
                className={classNames('pl-1', errorMessage && 'text-red-500')}
              >
                *
              </span>
            ) : null}
          </span>
        </label>
      )}
      <input
        autoComplete="off"
        ref={ref}
        type={type ?? 'text'}
        className={classNames(
          'w-full p-4 rounded-md shadow-sm outline-none',
          errorMessage && 'border border-red-400 placeholder:text-red-500'
        )}
        {...rest}
      />
      {errorMessage ? (
        <p className="text-red-500 text-sm font-thin">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export const Input = forwardRef(InputComponent);
