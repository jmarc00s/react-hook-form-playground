import React from 'react';
import { Menu } from './components/Menu';

export const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="text-xl font-bold flex-1">React-hook-form-playground</h1>
      <Menu />
    </nav>
  );
};
