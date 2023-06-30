import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
const COLOR = {
  primary: css`
    color: #fff;
    background: red;
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #242742;
  color: #fff;
`;

export const Container = styled.button<ButtonProps>`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  color: #fff;

  ${props => props.color && COLOR[props.color]}
  ${props => props.disabled && DISABLED}
`;
