import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';

export const SecondStep = () => {
  const { register } = useFormContext();

  return (
    <section className="flex flex-col gap-2">
      <Input
        type="text"
        id="motherName"
        {...register('secondStep.motherName')}
        placeholder="Mother name"
      />
      <Input
        type="text"
        id="fatherName"
        {...register('secondStep.fatherName')}
        placeholder="Father name"
      />
    </section>
  );
};
