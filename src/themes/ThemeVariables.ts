import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      sTomato: 'hsl(4, 100%, 67%)',
    },
    neutral: {
      darkSlateGrey: 'hsl(234, 29%, 20%)',
      charcoalGrey: 'hsl(235, 18%, 26%)',
      grey: 'hsl(231, 7%, 60%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  mediaSize: {
    s: '576px',
    md: '768px',
    lg: '992px',
    xlg: '1200px',
  },
};

export { myTheme };
