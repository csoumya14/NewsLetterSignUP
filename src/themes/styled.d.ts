import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        sTomato: string;
      };
      neutral: {
        darkSlateGrey: string;
        charcoalGrey: string;
        grey: string;
        white: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
  }
}
