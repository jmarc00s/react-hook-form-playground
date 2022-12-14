import React from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import { FormWithSteps } from '../..';
import { Input } from '../../../../components/Input';

export const FirstStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormWithSteps>();

  return (
    <section className="flex flex-col gap-2">
      <Input
        type="text"
        id="name"
        {...register('firstStep.name')}
        label="Name"
        required
        errorMessage={errors.firstStep?.name?.message}
      />
      <Input
        type="number"
        id="age"
        required
        {...register('firstStep.age', {
          setValueAs: (value) => {
            if (value) return parseInt(value);
            return 0;
          },
        })}
        label="Age"
        errorMessage={errors.firstStep?.age?.message}
      />
      <Input
        type="text"
        id="street"
        {...register('firstStep.street')}
        label="Street"
      />
      <Input
        type="text"
        id="neighborhood"
        {...register('firstStep.neighborhood')}
        label="Neighborhood"
      />
      <Input
        type="text"
        id="documentNumber"
        {...register('firstStep.documentNumber')}
        label="Document number"
      />
    </section>
  );
};
