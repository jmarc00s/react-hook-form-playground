import React, { ReactElement, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Toolbar } from './components/Toolbar';
import { Tabs } from './components/Tabs';

const FormWithTabs = () => {
  const { ...methods } = useForm();

  return (
    <section className="flex flex-col w-full">
      <FormProvider {...methods}>
        <Toolbar />
        <Tabs />
        <div className="py-4 px-2">
          <Outlet />
        </div>
      </FormProvider>
    </section>
  );
};

export default FormWithTabs;
