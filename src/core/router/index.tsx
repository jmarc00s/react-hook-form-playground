import React from 'react';
import {
  Routes,
  Route,
  redirect,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from '../../App';
import { FormPage } from '../../pages/Form';
import { FormArrayPage } from '../../pages/FormArray';
import { FormWithStepsPage } from '../../pages/FormWithSteps';
import { FirstStep } from '../../pages/FormWithSteps/components/FirstStep';
import { SecondStep } from '../../pages/FormWithSteps/components/SecondStep';
import { ThirdStep } from '../../pages/FormWithSteps/components/ThirdStep';
import { FormWithTabs } from '../../pages/FormWithTabs';
import { AddressTab } from '../../pages/FormWithTabs/tabs/Address';
import { BillsTab } from '../../pages/FormWithTabs/tabs/Bills';
import { SettingsTab } from '../../pages/FormWithTabs/tabs/Settings';
import UserTab from '../../pages/FormWithTabs/tabs/User';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <FormPage />,
      },
      {
        path: 'formArray',
        element: <FormArrayPage />,
      },
      {
        path: 'steps',
        element: <FormWithStepsPage />,
        children: [
          {
            path: 'first',
            element: <FirstStep />,
          },
          {
            path: 'second',
            element: <SecondStep />,
          },
          {
            path: 'third',
            element: <ThirdStep />,
          },
        ],
      },
      {
        path: 'tabs',
        element: <FormWithTabs />,
        children: [
          {
            path: 'user',
            element: <UserTab />,
          },
          {
            path: 'address',
            element: <AddressTab />,
          },
          {
            path: 'bills',
            element: <BillsTab />,
          },
          {
            path: 'settings',
            element: <SettingsTab />,
          },
        ],
      },
    ],
  },
]);
