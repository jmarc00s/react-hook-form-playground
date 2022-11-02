import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { undefined, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as validationMessages from '../../utils/validation/messages';
import { FormStep, FormWithSteps } from './utils/types';

const schema = z.object({
  firstStep: z.object({
    name: z.string().min(1, validationMessages.CANT_BE_BLANK),
    age: z
      .number()
      .nonnegative(validationMessages.CANT_BE_NEGATIVE)
      .min(1, validationMessages.CANT_BE_EMPTY),
    street: z.string(),
    neighborhood: z.string(),
    documentNumber: z.string(),
  }),
  secondStep: z.object({
    motherName: z.string(),
    fatherName: z.string(),
  }),
  thirdStep: z.object({
    friends: z.array(
      z.object({
        name: z.string(),
        email: z.string().email(validationMessages.EMAIL_MUST_BE_VALID),
      })
    ),
  }),
});

const formSteps = {
  first: new FormStep('first', 'second'),
  second: new FormStep('second', 'third', 'first'),
  third: new FormStep('third', null, 'second'),
};

export const FormWithStepsPage = () => {
  const [activeStep, setActiveStep] = useState<FormStep>(formSteps['first']);

  useEffect(() => {
    navigate('/steps/first');
  }, []);

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
