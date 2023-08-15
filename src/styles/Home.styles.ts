import { Banner } from '@/components/Banner/Banner';
import styled from 'styled-components';
export const Main = styled.div`
  background: ${props => props.theme.palette.neutral.darkSlateGrey};
  display: flex;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    justify-content: center;
    align-items: center;
  }
  min-height: 100vh;
  justify-content: flex-start;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  padding:2rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) 
    border:1px solid red;
    row-gap:1rem;
    
  }
  gap: 1rem;
`;

export const Heading = styled(Banner)`
  color: red;
  padding: 3rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.palette.neutral.white};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: fit-content;
    height: 50%;
    border-radius: 16px;
    padding: 2rem;
    flex-direction: row-reverse;
  }
`;
