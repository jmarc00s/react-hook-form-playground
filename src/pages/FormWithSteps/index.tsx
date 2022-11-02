import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { undefined, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as validationMessages from '../../utils/validation/messages';

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

export type FormWithSteps = {
  firstStep: FirstStepForm;
  secondStep: SecondStepForm;
  thirdStep: ThirdStepForm;
};

const schema = z.object({
  firstStep: z.object({
    name: z.string().min(1, validationMessages.CANT_BE_BLANK),
    age: z
      .number()
      .nonnegative(validationMessages.CANT_BE_NEGATIVE)
      .min(1, validationMessages.CANT_BE_EMPTY),
  }),
});

type FormStepDef = 'first' | 'second' | 'third' | null;

class FormStep {
  name: FormStepDef;
  next?: FormStepDef;
  previous?: FormStepDef;

  constructor(name: FormStepDef, next?: FormStepDef, previous?: FormStepDef) {
    this.name = name;
    this.next = next;
    this.previous = previous;
  }

  hasNext = (): boolean => !!this.next?.length;
  hasPrevious = (): boolean => !!this.previous?.length;
}

const formSteps = {
  first: new FormStep('first', 'second'),
  second: new FormStep('second', 'third', 'first'),
  third: new FormStep('third', null, 'second'),
};

export const FormWithStepsPage = () => {
  const [activeStep, setActiveStep] = useState<FormStep>(formSteps['first']);

  const { ...methods } = useForm<FormWithSteps>({
    mode: 'onChange',
    defaultValues: {
      firstStep: {},
      secondStep: {},
      thirdStep: {
        friends: [],
      },
    },
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const { isValid } = useFormState({ control: methods.control });

  const onSubmit = (data: FormWithSteps) => console.log(data);

  useEffect(() => {
    navigate('/steps/first');
  }, []);

  const handleNextStepClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (activeStep.hasNext()) {
      const nextStep = activeStep.next!;
      setActiveStep(formSteps[nextStep]);
      navigate(`${nextStep}`);
    }
  };

  const handlePreviousStepClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (activeStep.hasPrevious()) {
      const previousStep = activeStep.previous!;
      setActiveStep(formSteps[previousStep]);
      navigate(`${previousStep}`);
    }
  };

  return (
    <section className="flex flex-col w-1/2 mx-auto">
      <ul className="steps">
        <li className="step">You</li>
        <li className="step">Parents</li>
        <li className="step">Friends</li>
      </ul>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-8">
          <Outlet />

          <div className="flex justify-between mt-8">
            <button
              disabled={!activeStep.hasPrevious()}
              className="btn btn-secondary"
              onClick={handlePreviousStepClick}
            >
              Previous
            </button>
            {activeStep.hasNext() ? (
              <button
                disabled={!isValid}
                className="btn btn-primary btn-wide"
                onClick={handleNextStepClick}
              >
                Next
              </button>
            ) : (
              <button disabled={!isValid} className="btn btn-primary btn-wide">
                Save
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </section>
  );
};
