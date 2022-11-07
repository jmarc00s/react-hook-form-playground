import { Input } from 'components/Input';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import React, { ReactElement, useMemo } from 'react';

const AddressTab = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useTabsFormContext();

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
        />
        <Input
          label="Neighborhood"
          {...register('address.neighborhood')}
          required
          errorMessage={neighborhoodErrors}
        />
      </div>
      <div className="flex gap-2">
        <Input label="Zip code" {...register('address.zipCode')} />
        <Input label="City" {...register('address.city')} />
      </div>
    </section>
  );
};

export default AddressTab;
