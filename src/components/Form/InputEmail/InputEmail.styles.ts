import { FieldError } from 'react-hook-form';
import styled from 'styled-components';
export const Inputs = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
`;
export const Input = styled('input')<{ error?: FieldError }>`
  width: 100%;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
  ${({ error }) =>
    error &&
    `
     border: 1px solid #FF6155;
      background: rgba(255,97,85,.2);
      color: #ff6155;
    `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background: #242742;
  color: #fff;
`;

export const ErrorMessage = styled.p`
  color: #ff6155;
  align-self: flex-start;
  width: 50%;
`;

export const LabelErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
