type UserFormType = {
  firstName: string;
  lastName: string;
  birth: Date;
  documentNumber: string;
  gender: 'M' | 'F' | 'O';
  civilStatus: 'single' | 'married' | 'other';
};

export type FormWithTabsFormType = {
  user: UserFormType;
};
