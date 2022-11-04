import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';
import {
  UserIcon,
  Cog8ToothIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';
import { Tab } from './components/Tab';
import { useNavigate } from 'react-router-dom';

type Tab = {
  id: string;
  name: string;
  icon?: ReactElement;
};

const tabs: Tab[] = [
  {
    id: 'user',
    name: 'User',
    icon: <UserIcon className="h-6 w-6" />,
  },
  {
    id: 'address',
    name: 'Address',
    icon: <MapPinIcon className="h-6 w-6" />,
  },
  {
    id: 'bills',
    name: 'Bills',
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <Cog8ToothIcon className="h-6 w-6" />,
  },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('user');
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    navigate(tab);
    setActiveTab(tab);
  };

  return (
    <div className="tabs w-full">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => handleTabClick(tab.id)}
          {...tab}
        />
      ))}
    </div>
  );
};
