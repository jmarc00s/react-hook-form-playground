import { Checkbox } from 'components/Checkbox';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';
import React, { ReactElement } from 'react';

const SettingsTab = (): ReactElement => {
  const { register } = useTabsFormContext();
  const { isShowing } = useUiContext();

  return (
    <section className="flex">
      <div className="flex gap-2 w-full">
        <Checkbox
          disabled={isShowing}
          {...register('settings.active')}
          label="Active"
        />
        <Checkbox
          disabled={isShowing}
          {...register('settings.showLateBills')}
          label="Show late bills"
        />
        <Checkbox
          disabled={isShowing}
          {...register('settings.showUpcomingBills')}
          label="Show upcoming bills"
        />
      </div>
    </section>
  );
};

export default SettingsTab;
