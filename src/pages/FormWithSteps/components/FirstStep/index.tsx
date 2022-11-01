import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';

export const FirstStep = () => {
  const { register } = useFormContext();

  return (
    <section className="flex flex-col gap-2">
      <Input
        type="text"
        id="name"
        {...register('firstStep.name', {
          required: true,
        })}
        required
        placeholder="Name"
      />
      <Input
        type="number"
        id="age"
        {...register('firstStep.age', {
          required: true,
        })}
        required
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
