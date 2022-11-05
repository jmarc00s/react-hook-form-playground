import React from 'react';

const FormWithTabs = React.lazy(() => import('..'));
const UserTab = React.lazy(() => import('../tabs/User'));
const AddressTab = React.lazy(() => import('../tabs/Address'));
const BillsTab = React.lazy(() => import('../tabs/Bills'));
const SettingsTab = React.lazy(() => import('../tabs/Settings'));

export const formWithTabRoutes = {
  path: 'tabs',
  element: (
    <React.Suspense fallback={<>Loading...</>}>
      <FormWithTabs />
    </React.Suspense>
  ),
  children: [
    {
      path: 'user',
      element: (
        <React.Suspense fallback={<>Loading...</>}>
          <UserTab />
        </React.Suspense>
      ),
    },
    {
      path: 'address',
      element: (
        <React.Suspense fallback={<>Loading...</>}>
          <AddressTab />
        </React.Suspense>
      ),
    },
    {
      path: 'bills',
      element: (
        <React.Suspense fallback={<>Loading...</>}>
          <BillsTab />
        </React.Suspense>
      ),
    },
    {
      path: 'settings',
      element: (
        <React.Suspense fallback={<>Loading...</>}>
          <SettingsTab />
        </React.Suspense>
      ),
    },
  ],
};
