import React from 'react';
import { useFieldArray, useFormContext, useFormState } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { FormWithSteps } from '../../utils/types';

const FORM_ARRAY_NAME = 'thirdStep.friends';

export const ThirdStep = () => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: FORM_ARRAY_NAME,
    control,
  });

  const { errors } = useFormState<FormWithSteps>();

  const handleAddFriendClick = (event: any) => {
    event.preventDefault();
    append({
      name: '',
      email: '',
    });
  };

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-center mb-4 text-xl">Friends</h1>
      {fields.map((field, index) => {
        const errorMessage = errors?.thirdStep?.friends?.length
          ? errors?.thirdStep?.friends[index]?.email?.message
          : '';

        return (
          <div key={field.id} className="py-2 flex gap-2 items-center">
            <Input
              type="text"
              placeholder="Name"
              {...register(`${FORM_ARRAY_NAME}.${index}.name` as const)}
            />
            <Input
              type="string"
              placeholder="Email"
              {...register(`${FORM_ARRAY_NAME}.${index}.email` as const)}
              errorMessage={errorMessage}
            />
            <div className="px-1">
              <button
                className="btn btn-outline btn-error"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col items-center mb-4">
        <button
          className="btn btn-accent btn-wide"
          onClick={handleAddFriendClick}
        >
          Add friend
        </button>
      </div>
    </section>
  );
};
