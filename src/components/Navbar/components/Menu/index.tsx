import React from 'react';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <ul className="menu menu-horizontal">
      <MenuItem label="Form" to="/" />
      <MenuItem label="Form Array" to="/formArray" />
    </ul>
  );
};
