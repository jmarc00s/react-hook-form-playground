import React, { ReactElement } from 'react';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';
import { Badge } from 'components/Badge';
import Pagination from './components/Pagination';
import { Crud } from './components/Crud';

export const Toolbar = (): ReactElement => {
  const { formStatus } = useUiContext();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <Crud />
        <Badge text={formStatus} size="md" variant="secondary" />
        <Pagination />
      </div>
      <div className="divider"></div>
    </div>
  );
};
