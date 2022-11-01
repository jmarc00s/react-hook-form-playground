import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const FormWithStepsPage = () => {
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
      <Outlet />
    </section>
  );
};
