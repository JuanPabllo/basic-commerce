import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import "../globals.css";

import { light } from "../styles/theme/light";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
