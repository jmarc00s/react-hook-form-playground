import React from 'react';
import { Menu } from './components/Menu';

export const Navbar = () => {
  return (
    <nav className="h-16 p-8 bg-blue-600 text-white flex items-center justify-between">
      <h1 className="text-xl font-bold">React-hook-form-playground</h1>
      <Menu />
    </nav>
  );
};
