import React, { FC } from 'react';
import { Container } from './Button.styles';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type: string;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color = 'primary',
  disabled,
  type,
}) => {
  return (
    <Container type={type} onClick={onClick} color={color} disabled={disabled}>
      {children}
    </Container>
  );
};
