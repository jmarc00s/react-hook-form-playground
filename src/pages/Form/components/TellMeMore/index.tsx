import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const TellMeMore = () => {
  const { register, unregister } = useFormContext();
  const [showInput, setShowInput] = useState(false);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setShowInput(target.checked);
    if (!target.checked) {
      unregister('tellMeMore');
    }
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="tellMoreToggle" className="pb-4">
        <input
          type="checkbox"
          id="tellMoreToggle"
          className="checkbox checkbox-sm"
          onChange={handleOnChange}
        />
        <span className="text-white pl-2">Plz tell us more</span>
      </label>

      {showInput && (
        <textarea id="tellMore" className="input" {...register('tellMeMore')} />
      )}
    </div>
  );
};
