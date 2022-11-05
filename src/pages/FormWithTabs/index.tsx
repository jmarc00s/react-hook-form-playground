import React, { ReactElement, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Toolbar } from './components/Toolbar';
import { Tabs } from './components/Tabs';

import { FormWithTabsFormType } from './utils/form-with-tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './utils/form-schema';

const FormWithTabs = () => {
  const { ...methods } = useForm<FormWithTabsFormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

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
