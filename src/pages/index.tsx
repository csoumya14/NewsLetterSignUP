import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { Main, TextWrapper, Heading, Wrapper } from '@/styles/Home.styles';
import { IllustrationSmallScreen } from '@/components/images/svgs/IllustrationSmallScreen/IllustrationSmallScreen';
import { Banner } from '@/components/Banner/Banner';
import { List } from '@/components/List/List';
import { InputEmail } from '@/components/Form/InputEmail/InputEmail';
import { useFormData } from '../../contexts';
import { SuccessMessage } from '@/components/SuccessMessage/SuccessMessage';
import { useViewPort } from '@/helpers/customViewPort';
import { IllustrationBigScreen } from '@/components/images/svgs/IllustrationBigScreen/IllustrationBigScreen';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const { successSubmission } = useFormData();
  const [width] = useViewPort();
  const breakPoint = 400;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main className={`${roboto.className}`}>
        {successSubmission ? (
          <SuccessMessage />
        ) : (
          <Wrapper>
            {width < breakPoint ? <IllustrationSmallScreen /> : <IllustrationBigScreen />}
            <TextWrapper>
              <Heading textLevel={'h1'}>Stay Updated!</Heading>
              <Banner textLevel={'p'}>
                Join 60,000+ product managers receiving monthly updates on:
              </Banner>
              <List />
              <InputEmail />
            </TextWrapper>
          </Wrapper>
        )}
      </Main>
    </>
  );
}
