import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { AuthProvider } from "@/lib/auth";

import customTheme from "@/styles/theme";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #_next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      >
        {children}
      </Global>
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
