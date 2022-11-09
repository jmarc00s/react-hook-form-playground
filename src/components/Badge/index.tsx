import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { SizeType, VariantType } from 'utils/types';

type BadgeProps = {
  text: string;
  size?: SizeType;
  variant?: VariantType;
};

export const Badge = ({
  text,
  size = 'md',
  variant = 'ghost',
}: BadgeProps): ReactElement => {
  return (
    <div
      title={text}
      className={classNames(['badge', `badge-${variant}`, `badge-${size}`])}
    >
      {text}
    </div>
  );
};
