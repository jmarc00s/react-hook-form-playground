import {
  PlusIcon,
  ArrowUpOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { ReactElement } from 'react';

type ToolbarProps = {
  onNewClick?: () => void;
  onSaveClick?: () => void;
  onCancelClick?: () => void;
};

export const Toolbar = ({
  onSaveClick,
  onCancelClick,
  onNewClick,
}: ToolbarProps): ReactElement => {
  return (
    <div className="flex justify-center gap-2">
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
  );
};
