type UserFormType = {
  firstName: string;
  lastName: string;
  birth: Date;
  documentNumber: string;
  gender: 'M' | 'F' | 'O';
  civilStatus: 'single' | 'married' | 'other';
};

type AddressFormType = {
  street: string;
  neighborhood: string;
  zipCode: string;
  city: string;
};

type SettingsFormType = {
  active: boolean;
  showLateBills: boolean;
  showUpcomingBills: boolean;
};

export type FormWithTabsFormType = {
  user: UserFormType;
  address: AddressFormType;
  settings: SettingsFormType;
};
