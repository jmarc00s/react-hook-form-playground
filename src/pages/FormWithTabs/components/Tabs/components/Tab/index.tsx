import classNames from 'classnames';
import React, { ReactElement } from 'react';

type TabProps = {
  id: string;
  active: boolean;
  onClick: (id: string) => void;
  icon?: ReactElement;
  name: string;
};

export const Tab = ({
  id,
  active,
  name,
  icon,
  onClick,
}: TabProps): ReactElement => {
  const handleClick = () => onClick(id);
  return (
    <a
      className={classNames('tab tab-lg tab-bordered', active && 'tab-active')}
      onClick={handleClick}
    >
      {icon}
      <span className="pl-2">{name}</span>
    </a>
  );
};
