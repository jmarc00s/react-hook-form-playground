import classNames from 'classnames';
import React, { ButtonHTMLAttributes, Children, ReactElement } from 'react';
import { SizeType, VariantType } from 'utils/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  size?: SizeType;
  children?: ReactElement | string;
  wide?: boolean;
  block?: boolean;
  icon?: ReactElement;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  wide = false,
  block = false,
  className,
  children,
  icon,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      className={classNames(
        ['btn', `btn-${variant}`, `btn-${size}`],
        className,
        {
          'btn-wide': wide,
          'btn-block': block,
        }
      )}
      {...rest}
    >
      {icon}
      <span className="ml-1">{children}</span>
    </button>
  );
};
