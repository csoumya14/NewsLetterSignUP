import styled from 'styled-components';
import { Banner } from '../Banner/Banner';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${props => props.theme.palette.neutral.white};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: calc(100% - 10rem);
    gap: 1rem;
    height: fit-content;
    border-radius: 16px;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    width: calc(100% - 50rem);
  }
`;
export const EmailEntered = styled.span`
  font-weight: bold;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  flex-grow: 3;
`;
