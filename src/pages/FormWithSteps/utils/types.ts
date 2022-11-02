export type FirstStepForm = {
  name: string;
  age: number;
  street: string;
  neighborhood: string;
  documentNumber: string;
};

export type SecondStepForm = {
  motherName: string;
  fatherName: string;
};

export type Friend = {
  name: string;
  email: string;
};

export type ThirdStepForm = {
  friends: Friend[];
};

export type FormWithSteps = {
  firstStep: FirstStepForm;
  secondStep: SecondStepForm;
  thirdStep: ThirdStepForm;
};

export type FormStepDef = 'first' | 'second' | 'third' | null;

export class FormStep {
  name: FormStepDef;
  next?: FormStepDef;
  previous?: FormStepDef;

  constructor(name: FormStepDef, next?: FormStepDef, previous?: FormStepDef) {
    this.name = name;
    this.next = next;
    this.previous = previous;
  }

  hasNext = (): boolean => !!this.next?.length;
  hasPrevious = (): boolean => !!this.previous?.length;
}
