import { FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input, Form, ErrorMessage, LabelErrorWrapper } from './InputEmail.styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormData } from '../../../../contexts';
import { formDataTypes } from '@/types/formData';
import { Button } from '@/components/Button/Button';

// ...

const validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Valid email required'),
});

interface UserInput {
  email: string;
}

interface InputEmailProps {}

export const InputEmail: FC<InputEmailProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { setFormValues, data, setSuccessSubmission } = useFormData();
  const onSubmitHandler = (values: SetStateAction<formDataTypes>) => {
    console.log(values);
    setFormValues(values);
  };

  const handleClick = () => {
    setSuccessSubmission(true);
    handleSubmit(onSubmitHandler)();
  };

  return (
    <Form>
      <LabelErrorWrapper>
        <label htmlFor="email">Email address</label>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </LabelErrorWrapper>
      <Input
        error={errors.email}
        type="email"
        id="email"
        {...register('email')}
        placeholder="email@company.com"
      />
      <Button type="submit" disabled={!isValid} onClick={handleClick}>
        Subscribe to monthly newsletter
      </Button>
    </Form>
  );
};
