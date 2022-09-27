import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormPage } from '../../pages/Form';
import { FormArrayPage } from '../../pages/FormArray';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/formArray" element={<FormArrayPage />} />
    </Routes>
  );
};
