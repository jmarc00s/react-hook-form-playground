import classNames from 'classnames';
import React, { ReactElement, useState } from 'react';
import {
  UserIcon,
  Cog8ToothIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

type Tabs = 'tab1' | 'tab2' | 'tab3' | 'tab4';
type Tab = {
  id: string;
  name: string;
  icon?: ReactElement;
};

export const FormWithTabs = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('tab1');
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
  return (
    <section className="flex flex-col w-full">
      <div className="tabs w-full">
        {tabs.map(({ id, name, icon }) => (
          <a
            key={id}
            className={classNames(
              'tab tab-bordered',
              activeTab === id && 'tab-active'
            )}
            onClick={() => setActiveTab(id as Tabs)}
          >
            {icon}
            <span className="pl-2">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
