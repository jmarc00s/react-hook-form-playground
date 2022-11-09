import React from 'react';
import { Button } from 'components/Button';
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';

const iconClass = 'h-6 w-6';

const Pagination = () => {
  const { isAddingOrEditing } = useUiContext();

  return (
    <div className="flex gap-2">
      <Button
        disabled={isAddingOrEditing}
        icon={<ChevronDoubleLeftIcon className={iconClass} />}
      />
      <Button
        disabled={isAddingOrEditing}
        icon={<ChevronLeftIcon className={iconClass} />}
      />
      <Button
        disabled={isAddingOrEditing}
        icon={<ChevronRightIcon className={iconClass} />}
      ></Button>
      <Button
        disabled={isAddingOrEditing}
        icon={<ChevronDoubleRightIcon className={iconClass} />}
      />
    </div>
  );
};

export default Pagination;
