import { FC } from 'react';
import { Banner } from '../Banner/Banner';
import { Button } from '../Button/Button';
import { useFormData } from '../../../contexts';
import { Container, TextWrapper, ThanksMessage } from './SuccessMessage.styles';
import { IconSuccess } from '../images/svgs/IconSuccess/IconSuccess';

interface SuccessMessageProps {}

export const SuccessMessage: FC<SuccessMessageProps> = () => {
  const { setSuccessSubmission, data } = useFormData();
  console.log(data);
  const handleClick = () => {
    setSuccessSubmission(false);
  };
  return (
    <Container>
      <TextWrapper>
        <IconSuccess />
        <ThanksMessage textLevel={'h1'}>Thanks for subscribing</ThanksMessage>
        <Banner textLevel={'p'}>
          A confirmation email has been sent to <span>{data.email}</span>. Please open it and click
          the button inside to confirm your subscription
        </Banner>
      </TextWrapper>
      <Button type="submit" onClick={handleClick}>
        Dismiss message
      </Button>
    </Container>
  );
};
