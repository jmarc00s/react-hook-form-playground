import React from 'react';
import { Input } from 'components/Input';
import { useTabsFormContext } from 'pages/FormWithTabs/utils/hooks/useTabsFormContext';
import { Select } from 'components/Select';
import { useUiContext } from 'pages/FormWithTabs/utils/hooks/useUiContext';

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

  const { isDisabled } = useUiContext();

  const firstNameErrors = errors?.user?.firstName?.message;

  return (
    <section className="flex flex-col">
      <div className="flex gap-2">
        <Input
          {...register('user.firstName')}
          label="First name"
          required
          errorMessage={firstNameErrors}
          disabled={isDisabled}
        />
        <Input
          {...register('user.lastName')}
          label="Last name"
          disabled={isDisabled}
        />
      </div>
      <div className="flex gap-2">
        <Input
          {...register('user.birth')}
          label="Date of birth"
          disabled={isDisabled}
        />
        <Input
          {...register('user.documentNumber')}
          label="Document number"
          disabled={isDisabled}
        />
      </div>
      <div className="flex gap-2">
        <Select
          {...register('user.gender')}
          label="Gender"
          options={genderOptions}
          disabled={isDisabled}
        />
        <Select
          {...register('user.civilStatus')}
          label="Civil status"
          options={civilStatusOptions}
          disabled={isDisabled}
        />
      </div>
    </section>
  );
};

export default UserTab;
