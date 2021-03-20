import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ApiProvider } from '../contexts/apiContext';
import GlobalStyles from '../styles/GlobalStyles';
import { light } from '../styles/theme/light';

export default class MyApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApiProvider>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApiProvider>
    );
  }
}
