import React from 'react';
import {
  ArrowUpOnSquareIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Button } from 'components/Button';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import { FormWithTabsFormType } from 'pages/FormWithTabs/utils/form-with-tabs';

export const Crud = () => {
  const { cancel, setAdding, setEditing, isAddingOrEditing, isShowing } =
    useUiContext();
  const { reset: resetForm } = useTabsFormContext();

  const onNewClick = () => {
    setAdding();
    const emptyState: FormWithTabsFormType = {
      id: 0,
      address: {
        street: '',
        neighborhood: '',
        city: '',
        zipCode: '',
      },
      settings: {
        active: true,
        showLateBills: true,
        showUpcomingBills: true,
      },
      user: {
        birth: null,
        documentNumber: '',
        firstName: '',
        lastName: '',
      },
    };
    resetForm(emptyState);
  };

  const onEditClick = () => setEditing();
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
        onClick={onEditClick}
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
