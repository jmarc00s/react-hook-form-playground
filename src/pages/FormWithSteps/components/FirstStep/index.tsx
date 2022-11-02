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
        placeholder="Name"
        required
        errorMessage={errors.firstStep?.name?.message}
      />
      <Input
        type="number"
        id="age"
        {...register('firstStep.age')}
        placeholder="Age"
      />
      <Input
        type="text"
        id="street"
        {...register('firstStep.street')}
        placeholder="Street"
      />
      <Input
        type="text"
        id="neighborhood"
        {...register('firstStep.neighborhood')}
        placeholder="Neighborhood"
      />
      <Input
        type="text"
        id="documentNumber"
        {...register('firstStep.documentNumber')}
        placeholder="Document number"
      />
    </section>
  );
};
