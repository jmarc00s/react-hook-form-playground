import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

interface FormProps {
  value: string;
}

export const FormArrayPage = () => {
  const { register, control, handleSubmit } = useForm();

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Form array</h1>
        <div className="flex flex-col">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="py-2">
                <input
                  className="text-slate-800 w-3/4 mr-auto"
                  key={field.id}
                  type="text"
                  placeholder="Value"
                  {...register(`test.${index}.value` as const)}
                />
                <button
                  className="bg-red-500 text-white w-1/4 h-10"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <button className="text-white bg-blue-600 rounded-sm shadow-sm px-4 py-2 w-full ">
          Send
        </button>
      </form>
      <button onClick={handleCreateField}>Append</button>
    </section>
  );
};
