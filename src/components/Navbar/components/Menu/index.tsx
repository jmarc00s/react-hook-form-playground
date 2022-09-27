import React from 'react';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <ul className="flex">
      <MenuItem label="Form" to="/" />
      <MenuItem label="Form Array" to="/formArray" />
      <MenuItem label="Form With conditional" to="/formConditional" />
    </ul>
  );
};
