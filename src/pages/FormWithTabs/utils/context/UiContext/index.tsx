import { createContext, ReactNode, useMemo, useState } from 'react';

type FormStatus = 'adding' | 'showing' | 'editing';

type TabsFormUiContextType = {
  formStatus: FormStatus;
  isShowing: boolean;
  isAddingOrEditing: boolean;
  setAdding: () => void;
  cancel: () => void;
};

export const UiContext = createContext<TabsFormUiContextType>({
  formStatus: 'showing',
  setAdding: () => {},
  cancel: () => {},
  isShowing: true,
  isAddingOrEditing: false,
});

type UiContextProviderType = { children: ReactNode };

export const UiContextProvider = ({ children }: UiContextProviderType) => {
  const [formStatus, setFormStatus] = useState<FormStatus>('showing');

  const setAdding = () => setFormStatus('adding');
  const cancel = () => setFormStatus('showing');

  const isShowing = formStatus === 'showing';
  const isAddingOrEditing = formStatus === 'adding' || formStatus === 'editing';

  const value = {
    formStatus,
    setAdding,
    cancel,
    isShowing,
    isAddingOrEditing,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
