import styled from 'styled-components';
import { Banner } from '../Banner/Banner';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100vh;
  border: 1px solid green;
`;

export const ThanksMessage = styled(Banner)`
  width: 50%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  flex-grow: 3;
`;
