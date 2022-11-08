import { createContext, useState } from 'react';

type FormStatus = 'adding' | 'showing' | 'editing';

type TabsFormUiContextType = {
  formStatus: FormStatus;
};

const TabsFormUiContext = createContext<TabsFormUiContextType>({
  formStatus: 'showing',
});

export const TabsFormUiContextProvider = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('showing');

  const value = {
    formStatus,
  };

  return (
    <TabsFormUiContext.Provider value={value}></TabsFormUiContext.Provider>
  );
};
