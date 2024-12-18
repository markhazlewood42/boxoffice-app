import { ThemeProvider, createGlobalStyle } from "styled-components";

const globalTheme = {
    fontFamily: 'Roboto, sans-serif',
    mainColors: {
      blue: '#2400ff',
      gray: '#c6c6c6',
      dark: '#353535',
    },
  };

  const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

  const GlobalTheme = ({ children }) => {
    return(
        <ThemeProvider theme={globalTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
  };

  export default GlobalTheme;