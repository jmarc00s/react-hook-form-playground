import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  to: string;
}

export const MenuItem = ({ label, to }: MenuItemProps) => {
  return (
    <Link to={to}>
      <li className="px-2 hover:underline cursor-pointer">{label}</li>
    </Link>
  );
};
