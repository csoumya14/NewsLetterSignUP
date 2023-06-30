import { Dispatch, SetStateAction } from 'react';

export interface formDataTypes {
  email?: string;
}

export interface FormContextData {
  data: formDataTypes;
  setFormValues: Dispatch<SetStateAction<formDataTypes>>;
  successSubmission: boolean;
  setSuccessSubmission: Dispatch<SetStateAction<boolean>>;
}
