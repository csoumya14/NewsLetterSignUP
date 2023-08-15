import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { FormProvider } from '../../contexts';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '@/themes/ThemeVariables';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </ThemeProvider>
  );
}
