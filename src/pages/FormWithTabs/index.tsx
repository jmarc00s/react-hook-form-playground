import React, { ReactElement, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Toolbar } from './components/Toolbar';
import { Tabs } from './components/Tabs';

import { FormWithTabsFormType } from './utils/form-with-tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './utils/form-schema';
import { UiContextProvider } from './utils/context/UiContext';

const FormWithTabs = () => {
  const { ...methods } = useForm<FormWithTabsFormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormWithTabsFormType): void => console.log(data);

  return (
    <section className="flex flex-col w-full">
      <UiContextProvider>
        <FormProvider {...methods}>
          <Toolbar />
          <Tabs />
          <div className="py-4 px-2">
            <Outlet />
          </div>
        </FormProvider>
      </UiContextProvider>
    </section>
  );
};

export default FormWithTabs;
