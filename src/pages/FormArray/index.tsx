import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

interface FormProps {
  value: string;
}

export const FormArrayPage = () => {
  const { register, control, handleSubmit } = useForm();

  const { fields, append } = useFieldArray({
    name: 'test',
    control,
  });

  const handleCreateField = () => {
    append({ value: '' });
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="flex flex-col items-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Form array</h1>
        <div className="flex flex-col">
          {fields.map((field, index) => {
            return (
              <input
                className="text-slate-800"
                key={field.id}
                type="text"
                placeholder="Value"
                {...register(`test.${index}.value` as const)}
              />
            );
          })}
        </div>
        <button className="text-white bg-blue-600 rounded-sm shadow-sm px-4 py-2 w-full">
          Send
        </button>
      </form>
      <button onClick={handleCreateField}>Append</button>
    </section>
  );
};
