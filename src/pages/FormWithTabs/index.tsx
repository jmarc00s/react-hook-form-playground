import React, { ReactElement, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Toolbar } from './components/Toolbar';
import { Tabs } from './components/Tabs';

export const FormWithTabs = () => {
  const { ...methods } = useForm();

  return (
    <section className="flex flex-col w-full">
      <FormProvider {...methods}>
        <Toolbar />
        <Tabs />
        <Outlet />
      </FormProvider>
    </section>
  );
};
