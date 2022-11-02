import React, { useEffect } from 'react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { Link, Outlet, useNavigate } from 'react-router-dom';

type FirstStepForm = {
  name: string;
  age: number;
  street: string;
  neighborhood: string;
  documentNumber: string;
};

type SecondStepForm = {
  motherName: string;
  fatherName: string;
};

type Friend = {
  name: string;
  email: string;
};

type ThirdStepForm = {
  friends: Friend[];
};

type FormWithSteps = {
  firstStep: FirstStepForm;
  secondStep: SecondStepForm;
  thirdStep: ThirdStepForm;
};

export const FormWithStepsPage = () => {
  const { ...methods } = useForm<FormWithSteps>({
    mode: 'onChange',
    defaultValues: {
      firstStep: {},
      secondStep: {},
      thirdStep: {
        friends: [],
      },
    },
  });

  const navigate = useNavigate();

  const { isValid } = useFormState({ control: methods.control });

  const onSubmit = (data: FormWithSteps) => console.log(data);

  useEffect(() => {
    navigate('/steps/first');
  }, []);

  return (
    <section className="flex flex-col w-1/2 mx-auto">
      <ul className="steps">
        <li className="step step-secondary">
          <Link to="first">Step 01</Link>
        </li>

        <li className="step step-secondary">
          <Link to="second">Step 02</Link>
        </li>

        <li className="step step-secondary">
          <Link to="third">Step 03</Link>
        </li>
      </ul>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-8">
          <Outlet />
          <button
            disabled={!isValid}
            className="btn btn-primary btn-block mt-8"
          >
            Save
          </button>
        </form>
      </FormProvider>
    </section>
  );
};
