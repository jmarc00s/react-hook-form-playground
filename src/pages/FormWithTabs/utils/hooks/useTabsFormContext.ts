import { UseFormReturn } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { FormWithTabsFormType } from '../form-with-tabs';

export const useTabsFormContext = (): UseFormReturn<FormWithTabsFormType> =>
  useFormContext<FormWithTabsFormType>();
