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
  const { cancel, setAdding, isAddingOrEditing, isShowing } = useUiContext();

  const onNewClick = () => setAdding();
  const onSaveClick = () => console.log('onSave');
  const onCancelClick = () => cancel();

  return (
    <div className="flex gap-2">
      <Button
        disabled={isAddingOrEditing}
        onClick={onNewClick}
        icon={<PlusIcon className="h-6 w-6" />}
      >
        New
      </Button>
      <Button
        disabled={isAddingOrEditing}
        onClick={onNewClick}
        icon={<PencilIcon className="h-6 w-6" />}
      >
        Edit
      </Button>
      <Button
        disabled={isShowing}
        onClick={onSaveClick}
        icon={<ArrowUpOnSquareIcon className="h-6 w-6" />}
      >
        Save
      </Button>
      <Button
        disabled={isShowing}
        onClick={onCancelClick}
        icon={<XMarkIcon className="h-6 w-6" />}
      >
        Cancel
      </Button>
    </div>
  );
};
