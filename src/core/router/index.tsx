import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { FormPage } from '../../pages/Form';
import { FormArrayPage } from '../../pages/FormArray';
import { FormWithStepsPage } from '../../pages/FormWithSteps';
import { FirstStep } from '../../pages/FormWithSteps/components/FirstStep';
import { SecondStep } from '../../pages/FormWithSteps/components/SecondStep';
import { ThirdStep } from '../../pages/FormWithSteps/components/ThirdStep';
import { formWithTabRoutes } from '../../pages/FormWithTabs/config/routes';

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
      { ...formWithTabRoutes },
    ],
  },
]);
