import React, { ReactElement } from 'react';
import classNames from 'classnames';

type BadgeSize = 'lg' | 'md' | 'sm' | 'md';
type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type BadgeProps = {
  text: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

export const Badge = ({
  text,
  size = 'md',
  variant = 'ghost',
}: BadgeProps): ReactElement => (
  <div className={classNames('badge', `badge-${size}`, `badge-${variant}`)}>
    {text}
  </div>
);
