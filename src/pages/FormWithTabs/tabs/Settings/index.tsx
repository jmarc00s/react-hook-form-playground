import { Checkbox } from 'components/Checkbox';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import React, { ReactElement } from 'react';

const SettingsTab = (): ReactElement => {
  const { register } = useTabsFormContext();

  return (
    <section className="flex">
      <div className="flex gap-2 w-full">
        <Checkbox {...register('settings.active')} label="Active" />
        <Checkbox
          {...register('settings.showLateBills')}
          label="Show late bills"
        />
        <Checkbox
          {...register('settings.showUpcomingBills')}
          label="Show upcoming bills"
        />
      </div>
    </section>
  );
};

export default SettingsTab;
