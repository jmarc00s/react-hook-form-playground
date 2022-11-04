import React, { ReactElement, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Tabs } from './components/Tabs';

export const FormWithTabs = () => {
  return (
    <section className="flex flex-col w-full">
      <Tabs />
      <Outlet />
    </section>
  );
};
