import { FormContextData } from '@/types/formData';
import { ReactNode, createContext, useContext, useState } from 'react';

const defaultValues = {
  data: {
    email: '',
  },
  setFormValues: (): void => {},
  successSubmission: false,
  setSuccessSubmission: (): void => {},
};

export const FormContext = createContext<FormContextData>(defaultValues);

interface Props {
  children?: ReactNode;
}

export const FormProvider = ({ children }: Props) => {
  const [data, setData] = useState({});
  const [successSubmission, setSuccessSubmission] = useState<boolean>(false);
  const setFormValues = (values: {}) => {
    setData(prevValues => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues, successSubmission, setSuccessSubmission }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
