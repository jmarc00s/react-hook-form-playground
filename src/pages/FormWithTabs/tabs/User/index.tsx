import React from 'react';
import { Input } from 'components/Input';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import { Select } from 'components/Select';

const genderOptions = [
  { text: 'Masculine', value: 'M' },
  { text: 'Feminine', value: 'F' },
  { text: 'Other', value: 'O' },
];

const civilStatusOptions = [
  { text: 'Single', value: 'single' },
  { text: 'Married', value: 'married' },
  { text: 'Other', value: 'other' },
];

const UserTab = () => {
  const {
    register,
    formState: { errors },
  } = useTabsFormContext();

  const firstNameErrors = errors?.user?.firstName?.message;

  return (
    <section className="flex flex-col">
      <div className="flex gap-2">
        <Input
          {...register('user.firstName')}
          label="First name"
          required
          errorMessage={firstNameErrors}
        />
        <Input {...register('user.lastName')} label="Last name" />
      </div>
      <div className="flex gap-2">
        <Input {...register('user.birth')} label="Date of birth" />
        <Input {...register('user.documentNumber')} label="Document number" />
      </div>
      <div className="flex gap-2">
        <Select
          {...register('user.gender')}
          label="Gender"
          options={genderOptions}
        />
        <Select
          {...register('user.civilStatus')}
          label="Civil status"
          options={civilStatusOptions}
        />
      </div>
    </section>
  );
};

export default UserTab;
