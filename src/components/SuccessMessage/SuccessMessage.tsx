import { FC } from 'react';
import { Banner } from '../Banner/Banner';
import { useFormData } from '../../../contexts';
import { Container, EmailEntered, TextWrapper } from './SuccessMessage.styles';
import { IconSuccess } from '../images/svgs/IconSuccess/IconSuccess';
import { Button } from '../Button/Button';

interface SuccessMessageProps {}

export const SuccessMessage: FC<SuccessMessageProps> = () => {
  const { setSuccessSubmission, data } = useFormData();
  const handleClick = () => {
    setSuccessSubmission(false);
  };
  return (
    <Container>
      <TextWrapper>
        <IconSuccess />
        <Banner textLevel={'h1'}>Thanks for subscribing</Banner>
        <Banner textLevel={'p'}>
          A confirmation email has been sent to <EmailEntered>{data.email}</EmailEntered>. Please
          open it and click the button inside to confirm your subscription
        </Banner>
      </TextWrapper>
      <Button type="submit" onClick={handleClick}>
        Dismiss message
      </Button>
    </Container>
  );
};
