import React from 'react';
import { useFormContext } from 'react-hook-form';

const UserTab = () => {
  const { register } = useFormContext();
  return <div>UserTab</div>;
};

export default UserTab;
