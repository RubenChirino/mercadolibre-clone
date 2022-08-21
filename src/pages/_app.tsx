import type { AppProps } from "next/app";

// Styles
import "../styles/globals.css";
import { theme } from "styles/theme";

// Material
import { ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
