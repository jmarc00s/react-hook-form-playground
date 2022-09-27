import React from 'react';

interface MenuItemProps {
  label: string;
  to: string;
}

export const MenuItem = ({ label, to }: MenuItemProps) => {
  return <li className="px-2 hover:underline cursor-pointer">{label}</li>;
};
