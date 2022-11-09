import { Input } from 'components/Input';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';
import React, { ReactElement, useMemo } from 'react';

const AddressTab = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useTabsFormContext();

  const { isShowing } = useUiContext();

  const streetErrors = errors?.address?.street?.message;
  const neighborhoodErrors = errors?.address?.neighborhood?.message;

  return (
    <section className="flex flex-col">
      <div className="flex gap-2">
        <Input
          label="Street"
          {...register('address.street')}
          required
          errorMessage={streetErrors}
          disabled={isShowing}
        />
        <Input
          label="Neighborhood"
          {...register('address.neighborhood')}
          required
          errorMessage={neighborhoodErrors}
          disabled={isShowing}
        />
      </div>
      <div className="flex gap-2">
        <Input
          label="Zip code"
          {...register('address.zipCode')}
          disabled={isShowing}
        />
        <Input
          label="City"
          {...register('address.city')}
          disabled={isShowing}
        />
      </div>
    </section>
  );
};

export default AddressTab;
