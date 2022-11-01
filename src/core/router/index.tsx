import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormPage } from '../../pages/Form';
import { FormArrayPage } from '../../pages/FormArray';
import { FormWithStepsPage } from '../../pages/FormWithSteps';
import { FirstStep } from '../../pages/FormWithSteps/components/FirstStep';
import { SecondStep } from '../../pages/FormWithSteps/components/SecondStep';
import { ThirdStep } from '../../pages/FormWithSteps/components/ThirdStep';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/formArray" element={<FormArrayPage />} />
      <Route path="/steps" element={<FormWithStepsPage />}>
        <Route path="first" element={<FirstStep />} />
        <Route path="second" element={<SecondStep />} />
        <Route path="third" element={<ThirdStep />} />
      </Route>
    </Routes>
  );
};
