import React, { ReactElement } from 'react';
import {
  PlusIcon,
  ArrowUpOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';
import { Badge } from 'components/Badge';
import Pagination from './components/Pagination';

export const Toolbar = (): ReactElement => {
  const { cancel, setAdding, formStatus } = useUiContext();

  const onNewClick = () => setAdding();
  const onSaveClick = () => console.log('onSave');
  const onCancelClick = () => cancel();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button onClick={onNewClick} className="btn gap-2 btn-primary w-32">
            <PlusIcon className="h-6 w-6" /> New
          </button>
          <button onClick={onSaveClick} className="btn btn-primary gap-2">
            <ArrowUpOnSquareIcon className="h-6 w-6" />
            Save
          </button>
          <button onClick={onCancelClick} className="btn btn-primary gap-2">
            <XMarkIcon className="h-6 w-6" />
            Cancel
          </button>
        </div>
        <Badge text={formStatus} size="lg" variant="primary" />
        <Pagination />
      </div>
      <div className="divider"></div>
    </div>
  );
};
