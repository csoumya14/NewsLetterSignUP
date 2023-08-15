import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
const COLOR = {
  primary: css`
    color: ${props => props.theme.palette.neutral.white};
    background: ${props => props.theme.palette.primary.sTomato};
    box-shadow: rgb(255, 91, 73) 3px 5px 10px;
    border: none;
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: ${props => props.theme.palette.neutral.darkSlateGrey};
  box-shadow: none;
  color: ${props => props.theme.palette.neutral.white};
`;

export const Container = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 10px;
  color: ${props => props.theme.palette.neutral.white};

  ${props => props.color && COLOR[props.color]}
  ${props => props.disabled && DISABLED}
`;
