import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';
import {
  UserIcon,
  Cog8ToothIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';
import { Tab } from './components/Tab';

type Tabs = 'tab1' | 'tab2' | 'tab3' | 'tab4';

type Tab = {
  id: string;
  name: string;
  icon?: ReactElement;
};

const tabs: Tab[] = [
  {
    id: 'tab1',
    name: 'User',
    icon: <UserIcon className="h-6 w-6" />,
  },
  {
    id: 'tab2',
    name: 'Address',
    icon: <MapPinIcon className="h-6 w-6" />,
  },
  {
    id: 'tab3',
    name: 'Bills',
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
  },
  {
    id: 'tab4',
    name: 'Settings',
    icon: <Cog8ToothIcon className="h-6 w-6" />,
  },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('tab1');

  return (
    <div className="tabs w-full">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id as Tabs)}
          {...tab}
        />
      ))}
    </div>
  );
};
