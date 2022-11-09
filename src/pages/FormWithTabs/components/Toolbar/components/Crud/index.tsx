import React from 'react';
import {
  ArrowUpOnSquareIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Button } from 'components/Button';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';

export const Crud = () => {
  const { cancel, setAdding, formStatus } = useUiContext();

  const onNewClick = () => setAdding();
  const onSaveClick = () => console.log('onSave');
  const onCancelClick = () => cancel();

  const disableNewButton = formStatus === 'adding' || formStatus === 'editing';

  return (
    <div className="flex gap-2">
      <Button
        disabled={disableNewButton}
        onClick={onNewClick}
        icon={<PlusIcon className="h-6 w-6" />}
      >
        New
      </Button>
      <Button
        disabled={disableNewButton}
        onClick={onNewClick}
        icon={<PencilIcon className="h-6 w-6" />}
      >
        Edit
      </Button>
      <Button
        disabled={formStatus === 'showing'}
        onClick={onSaveClick}
        icon={<ArrowUpOnSquareIcon className="h-6 w-6" />}
      >
        Save
      </Button>
      <Button
        disabled={formStatus === 'showing'}
        onClick={onCancelClick}
        icon={<XMarkIcon className="h-6 w-6" />}
      >
        Cancel
      </Button>
    </div>
  );
};
