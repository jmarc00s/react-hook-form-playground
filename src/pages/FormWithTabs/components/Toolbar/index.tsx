import React, { ReactElement } from 'react';
import {
  PlusIcon,
  ArrowUpOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';
import { Badge } from 'components/Badge';
import Pagination from './components/Pagination';
import { Crud } from './components/Crud';

export const Toolbar = (): ReactElement => {
  const { cancel, setAdding, formStatus } = useUiContext();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <Crud />
        <Badge text={formStatus} size="lg" variant="primary" />
        <Pagination />
      </div>
      <div className="divider"></div>
    </div>
  );
};
