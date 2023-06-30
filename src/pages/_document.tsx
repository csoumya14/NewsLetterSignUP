import StyledComponentsRegistry from '@/lib/registry';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <StyledComponentsRegistry>
          <Main /> <NextScript />
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}
