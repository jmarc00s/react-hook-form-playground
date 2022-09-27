import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TellMeMore } from './components/TellMeMore';

interface FormWithContextProps {
  name: string;
  email: string;
  age: string;
  tellMeMore: string;
}

export const FormPage = () => {
  const { ...methods } = useForm<FormWithContextProps>();

  const onSubmit = (data: FormWithContextProps) => {
    console.log(data);
    methods.reset();
  };

  return (
    <section>
      <h1 className="text-center text-xl mb-8">
        Form with useFormContext and conditional Field
      </h1>
      <FormProvider {...methods}>
        <form
          className="items-center flex flex-col gap-2 text-slate-800"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...methods.register('name')}
          />
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            {...methods.register('email')}
          />
          <input
            type="number"
            id="age"
            placeholder="Age"
            {...methods.register('age')}
          />
          <TellMeMore />
          <button className="bg-blue-600 rounded-sm shadow-sm px-4 py-2">
            Save
          </button>
        </form>
      </FormProvider>
    </section>
  );
};
