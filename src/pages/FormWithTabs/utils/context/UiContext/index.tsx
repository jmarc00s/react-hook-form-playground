import { createContext, ReactNode, useMemo, useState } from 'react';

type FormStatus = 'adding' | 'showing' | 'editing';

type TabsFormUiContextType = {
  formStatus: FormStatus;
  isDisabled: boolean;
  setAdding: () => void;
  cancel: () => void;
};

export const UiContext = createContext<TabsFormUiContextType>({
  formStatus: 'showing',
  setAdding: () => {},
  cancel: () => {},
  isDisabled: true,
});

type UiContextProviderType = { children: ReactNode };

export const UiContextProvider = ({ children }: UiContextProviderType) => {
  const [formStatus, setFormStatus] = useState<FormStatus>('showing');

  const setAdding = () => setFormStatus('adding');
  const cancel = () => setFormStatus('showing');

  const isDisabled = useMemo(() => {
    return formStatus === 'showing';
  }, [formStatus]);

  const value = {
    formStatus,
    setAdding,
    cancel,
    isDisabled,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
