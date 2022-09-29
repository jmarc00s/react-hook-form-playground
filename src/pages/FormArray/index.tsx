import React, { useEffect, useMemo } from 'react';
import { useFieldArray, useForm, useFormState } from 'react-hook-form';

interface FormProps {
  value: string;
}

export const FormArrayPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'test',
    control,
  });

  const handleCreateField = () => {
    append({ value: '' });
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="flex flex-col w-1/2 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1>Form array</h1>
        <button
          className="btn btn-primary mt-4 btn-sm"
          onClick={handleCreateField}
        >
          Create field
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="py-2 flex">
                <input
                  className="input flex-1"
                  key={field.id}
                  type="text"
                  placeholder="Value"
                  {...register(`test.${index}.value` as const, {
                    required: true,
                  })}
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
        </div>
        {!!fields.length && (
          <button className="btn btn-success btn-block" disabled={!isValid}>
            Send
          </button>
        )}
      </form>
    </section>
  );
};
